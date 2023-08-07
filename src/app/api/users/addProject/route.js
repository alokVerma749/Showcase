import Project from "@/models/projectModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server"

export async function POST(request) {
    const reqBody = await request.json()
    const { title, description, tags, thumbnail } = reqBody.project;
    const email = reqBody.email
    const user = await User.findOne({ email })
    if (!user) {
        return NextResponse.json({
            success: false,
            message: "user not found",
        })
    }
    const project = new Project({
        userEmail: reqBody.email,
        title: title,
        description: description,
        tags: tags,
        thumbnail: thumbnail
    })
    const res = await project.save()
    console.log(res)
    return NextResponse.json({
        success: true,
        message: "Project added successfully"
    })
}