import { NextResponse } from "next/server";
import { cookies } from "next/dist/client/components/headers";

export async function GET() {
    'use server'
    try {
        const response = NextResponse.json({
            message: "Logout successfull",
            success: true
        }, { status: 200 })
        console.log(cookies().get("showcaseToken"))
        cookies().set('showcaseToken', '', { secure: true, htttpOnly: true, expires: Date.now() })
        console.log(cookies().get("showcaseToken"))
        return response;
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        })
    }
}