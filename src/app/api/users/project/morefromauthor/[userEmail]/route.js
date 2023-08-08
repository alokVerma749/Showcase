import Project from "@/models/projectModel";
import { NextResponse } from "next/server";

import { connect } from "@/dbConfig/dbConfig";
connect();

export async function GET(request, { params }) {
    const userEmail = params.userEmail
    const response = await Project.find({ userEmail: userEmail })
    return NextResponse.json({
        success: true,
        message: "projects fetched successfully",
        response
    })
}