import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig"
connect();

import bcryptjs from "bcryptjs"

export async function POST(request) {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;
    if (!name || !email || !password) {
        return NextResponse.json({
            success: false,
            message: "All fields are required"
        }, { status: 500 })
    }
    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
        return NextResponse.json({
            success: false,
            message: "User already exist"
        }, { status: 500 })
    }

    // Hashing password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    })
    const response = await user.save();
    if (response) {
        return NextResponse.json({
            success: true,
            message: "User registered successfully",
            response
        }, { status: 200 })
    } else {
        return NextResponse.json({
            success: false,
            message: "User registeration failed",
        }, { status: 500 })
    }
}