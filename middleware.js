/**
 * middleware.js
 */

import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'


export default withAuth(
  function middleware(req) {

    if (req.nextUrl.pathname.startsWith("/red") && req.nextauth.token?.role === "ADMIN") {
      return NextResponse.redirect(
        new URL("/adm/dashboard", req.url)
      );
    }

    if (req.nextUrl.pathname.startsWith("/adm") && req.nextauth.token?.role === "ADMIN") {
      return NextResponse.redirect(
        new URL("/auth/signIn?message=You_Are_Not_Authorized!&message2=Sign_In_with_the_proper_credentials_to_gain_access", req.url)
      );
    }

    if (req.nextUrl.pathname.startsWith("/usr") && req.nextauth.token?.role === "USER") {
      return NextResponse.redirect(
        new URL("/auth/signIn?message=You_Are_Not_Authorized!&message2=Sign_In_with_the_proper_credentials_to_gain_access", req.url)
      );
    }

    return null; // Return null if none of the conditions are met
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/adm/:path*", "/usr/:path*"],
};
