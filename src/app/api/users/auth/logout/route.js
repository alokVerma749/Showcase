import { NextResponse } from "next/server";
import { cookies } from "next/dist/client/components/headers";

export async function GET() {
    'use server'
    try {
        const response = NextResponse.json({
            message: "Logout successfull",
            success: true
        }, { status: 200 })
        cookies().set('showcaseToken', '', { expires: Date.now() })
        return response;
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        })
    }
}