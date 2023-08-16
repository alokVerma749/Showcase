import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successfull",
            success: true
        }, { status: 200 })
        response.cookies.delete("showcaseToken");
        return response;
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        })
    }
}