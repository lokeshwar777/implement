import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				// username: {
				// 	label: "Username",
				// 	type: "text",
				// 	placeholder: "lokeshwar",
				// },
				email: {
					label: "Email",
					type: "text",
					placeholder: "lokeshwar@email.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Missing email|password");
				}

				try {
					await connectToDB();
					const user = await User.findOne({
						email: credentials.email,
					});

					if (!user) {
						throw new Error("! You are Not Found 404 !");
					}

					const passwordsMatch = await bcrypt.compare(
						credentials.password,
						user.password,
					);

					if (!passwordsMatch) {
						throw new Error(
							"! hacker or what ??? (wrong password) !",
						);
					}

					// whatever you return can be accessed using `Session` Object
					return {
						id: user._id.toString(),
						email: user.email,
					};
				} catch (error) {
					throw new Error("problem while authenticating");
				}
			},
		}),
	],
	callbacks: {
		// this is exposed in case of "jwt" strategy
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		// this is exposed by default
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id as string;
			}
			return session;
		},
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60,
	},
	pages: {
		signIn: "/login",
		error: "/login",
	},
	secret: process.env.NEXTAUTH_SECRET,
};
