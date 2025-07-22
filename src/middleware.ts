import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: Request) {
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
		secureCookie: (process.env.NODE_ENV === "production") ? true : false,
	});
	console.log("Token in middleware:", token);



	return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
	matcher: ["/admin/:path*"]
}
