'use server'
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET() {
    try {
        cookies().set('showcaseToken', '', { expires: Date.now() })
        const response = NextResponse.json({
            message: "Logout successfull",
            success: true
        }, { status: 200 })
        return response;
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        })
    }
}