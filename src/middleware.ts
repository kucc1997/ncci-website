import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: Request) {
  const token = await getToken({ 
    req: request,
    secret: process.env.AUTH_SECRET 
  });
  console.log("Token in middleware:", token);
  
  // Check if the path starts with /admin
  if (request.url.includes("/admin")) {
    if (!token) {
      // If no token exists, redirect to login
      return NextResponse.redirect(new URL("/", request.url));
    }
    
    // Check if user has admin role
    if (token.role !== "admin") {
      // If user is not an admin, redirect to home page
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ["/admin/:path*"]
}
