import Project from "@/models/projectModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    const reqBody = await request.json()
    const { title, description, tags, thumbnail } = reqBody.project;
    const { email, author } = reqBody
    const user = await User.findOne({ email })
    if (!user) {
        return NextResponse.json({
            success: false,
            message: "user not found",
        })
    }
    const project = new Project({
        userEmail: email,
        author: author,
        title: title,
        description: description,
        tags: tags,
        thumbnail: thumbnail
    })
    await project.save()
    return NextResponse.json({
        success: true,
        message: "Project added successfully"
    })
}

export async function GET() {
    try {
        const data = await Project.find({});
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
