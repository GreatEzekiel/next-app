//import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*", // protect /dashboard
  ],
};


// This middleware intercepts requests to /users/:id* and redirects them to /new-page



// export function middleware(request: NextRequest) {
//   // Middleware logic can be added here if needed in the future
//     return NextResponse.redirect(new URL('/new-page', request.url));
// }

//export const config = {
    // *: zero or more characters
    // +: one or more characters
    // ?: zero or one character
    // (): group characters
    // {}: specify number of characters
    // []: specify a range of characters
    // |: or operator
//  matcher: ['/dashboard/:path*'],
//};