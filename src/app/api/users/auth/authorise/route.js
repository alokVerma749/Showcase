import User from "@/models/userModel"
import Jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

import { connect } from "@/dbConfig/dbConfig"
connect();

export async function GET(request) {
    try {
        const token = request.cookies.get("token").value
        if (!token) {
            return NextResponse.json({
                success: false,
                message: "token not found",
            })
        }
        const { userEmail } = Jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await User.findOne({ email: userEmail })
        return NextResponse.json({
            success: true,
            message: "authorisation success",
            name: user.name,
            email: user.email,
            isVerified: user.isVerified
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "authorisation failed"
        })
    }
}