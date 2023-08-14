import { connect } from "@/dbConfig/dbConfig";
connect();

import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

export async function POST(request) {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    if (!email || !password) {
        return NextResponse.json({
            success: false,
            message: "All fields are required"
        })
    }
    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({
            success: false,
            message: "user not registered"
        }, { status: 500 })
    }
    const validPassword = await bcryptjs.compare(password, user.password)
    if (!validPassword) {
        return NextResponse.json({
            success: false,
            message: 'wrong credentials'
        }, { status: 500 })
    }
    const tokenData = {
        userid: user._id,
        userEmail: user.email,
        userName: user.name,
        isVerified: user.isVerified
    }
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
    const response = NextResponse.json({
        success: true,
        message: 'logged in',
        token: token
    }, { status: 200 })
    response.cookies.set("showcaseToken", token, {
        httpOnly: true
    })
    return response;
}