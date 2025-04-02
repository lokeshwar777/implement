import { NextResponse } from "next/server";

const allowedOrigins =
    process.env.NODE_ENV === "production"
        ? ["https://www.yoursite.com", "https://www.yoursite1.com"]
        : ["https://www.gogle.com", "http://localhost:3000"];

export function middleware(request: Request) {
    const origin = request.headers.get("origin");

    // ! origin is for postman and tunderclient
    if ((origin && !allowedOrigins.includes(origin)) || !origin) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                "Content-Type": "text/plain",
            },
        });
    }

    // request.url.includes('/api/')
    const regex = new RegExp("/api/*");
    if (regex.test(request.url)) {
    }

    console.log("This is middleware");

    console.log("request.method", request.method);
    console.log("request.url", request.url);

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
