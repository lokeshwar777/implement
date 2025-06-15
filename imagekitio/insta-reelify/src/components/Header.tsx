import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Header() {
	const { data: session } = useSession();

	const handleLogout = async () => {
		try {
			await signOut();
		} catch (error) {
			console.log("error during signing out", error);
			throw new Error("failed to log out");
		}
	};
	return (
		<div>
			<button onClick={handleLogout}>Logout</button>
			{session ?
				<h1>Welcome to Insta-Reelify</h1>
			:	<>
					<Link href='/register'>Register</Link>
					<Link href='/login'>Login</Link>
				</>
			}
		</div>
	);
}
