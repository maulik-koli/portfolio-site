import { NextResponse } from "next/server";

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
};

export function proxy() {
    return NextResponse.next();
}