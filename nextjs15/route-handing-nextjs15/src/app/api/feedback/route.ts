import { NextResponse } from "next/server";

type Feedback = {
    name?: string;
    email?: string;
    message?: string;
};

export async function POST(request: Request) {
    const data: Feedback = await request.json(); // this is req.body in express
    console.log("data", data);
    const { name, email, message } = data;
    return NextResponse.json({ name, email, message });
}
