import Project from "@/models/projectModel";
import { connect } from "@/dbConfig/dbConfig"
connect()
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await Project.find();
        if (!data) {
            return NextResponse.json({
                success: false,
                message: "data not found"
            })
        }
        return NextResponse.json({
            success: true,
            message: "data fetched successfully",
            data
        })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({
            success: true,
            message: error.message
        })
    }
}
