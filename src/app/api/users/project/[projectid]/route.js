import Project from "@/models/projectModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.projectid;
    try {
        const res = await Project.findById(id);
        return NextResponse.json({
            success: true,
            message: "project fetched successfully",
            res
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}