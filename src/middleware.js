import { NextResponse } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path == "/auth/login" || path == "/auth/signup"
    const privatePath = path.startsWith("/profile");
    const token = request.cookies.get("token")?.value || ""

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if (privatePath && !token) {
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/profile/:id*',
        '/auth/login',
        '/auth/signup',
    ]
}