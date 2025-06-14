import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { email, password } = body;
		if (!email || !password) {
			return NextResponse.json(
				{ error: "missing input fields!" },
				{ status: 400 }, // bad request
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Invalid email format" },
				{ status: 400 },
			);
		}

		await connectToDB();
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{ error: `User with email id ${email} already exists!` },
				{ status: 409 }, // confict
			);
		}

		if (password.length < 6) {
			return NextResponse.json(
				{ error: "Password must be at least 6 characters" },
				{ status: 400 },
			);
		}

		const user = await User.create({ email, password });
		if (!user) {
			throw new Error("User creation failed");
		}

		return NextResponse.json(
			{ message: "User registered successfully." },
			{ status: 201 },
		);
	} catch (error) {
		console.log("failed to register !!!", error);
		return NextResponse.json(
			{ error: "User registration failed, try after some time!" },
			{ status: 500 }, // internal server error
		);
	}
}
