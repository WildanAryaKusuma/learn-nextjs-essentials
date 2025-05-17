import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware is Running")

  const { pathname } = request.nextUrl
  const token = request.cookies.get("token")

  console.log("Token : ", token)

  if (pathname.startsWith("/admin") && !token) {
    console.log("Request to admin page")

    return NextResponse.rewrite(new URL("/forbidden", request.nextUrl))
  }

}