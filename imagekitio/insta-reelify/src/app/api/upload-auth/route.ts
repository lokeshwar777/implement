import { getUploadAuthParams } from "@imagekit/next/server";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const { token, expire, signature } = getUploadAuthParams({
			privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string,
			publicKey: process.env.IMAGEKIT_PUBLIC_KEY as string,
			expire: 30 * 60,
			token: "lokeshwar",
		});
		return NextResponse.json({
			token,
			expire,
			signature,
			publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
		});
	} catch (error) {
		return NextResponse.json(
			{ error: "ImageKit auth failed" },
			{ status: 500 },
		);
	}
}
