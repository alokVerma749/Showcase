import Jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

import { connect } from "@/dbConfig/dbConfig"
connect();

export async function GET(request) {
    try {
        const getToken = request.cookies.get("token")
        if (!getToken) {
            return NextResponse.json({
                success: false,
                message: "token not found",
            }, { status: 404 })
        }
        const token = getToken.value
        let response = NextResponse.json({});
        Jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
            if (err) {
                response = NextResponse.json({
                    success: false,
                    message: err.message
                }, { status: 403 })
                response.cookies.set("token", "", {
                    httpOnly: true,
                    expires: new Date(0)
                })
            } else {
                response = NextResponse.json({
                    success: true,
                    message: "authorisation success",
                    name: decoded.userName,
                    email: decoded.userEmail,
                    isVerified: decoded.isVerified
                })
            }
        })
        return response;
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "authorisation failed"
        }, { status: 403 })
    }
}
