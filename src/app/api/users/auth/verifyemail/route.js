import { NextResponse } from "next/server";

import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
connect();

export async function GET(request) {
    try {
        const reqBody = request.json();
        const { token } = reqBody;
        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() }
        })
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "user not found"
            })
        }
        console.log(user);
        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}