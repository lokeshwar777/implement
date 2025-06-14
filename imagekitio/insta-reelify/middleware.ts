import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const middleware = () => NextResponse.next();

const callbacks = {
	authorized: ({ req, token }) => {
		const { pathname } = req.nextUrl;
		// allow only public & auth routes

		/*
		if (
			pathname === "/" ||
			pathname === "/login" ||
			pathname === "/register" ||
			pathname.startsWith("/api/auth") ||
			pathname.startsWith("/api/videos")
		) {
			return true;
		}
		return !!token;
        */

		const allowedRoutesRegex =
			/^\/($|login$|register$|api\/auth|api\/videos)/;

		return allowedRoutesRegex.test(pathname);
	},
};

export default withAuth(middleware, { callbacks });

export const config = {
	matcher: [
		/*
		 * Match all request paths except:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public folder
		 */
		"/((?!_next/static|_next/image|favicon.ico|public/).*)",
		"/api/(?!auth).*", // optional: skip middleware for `/api/auth/*`
	],
};
