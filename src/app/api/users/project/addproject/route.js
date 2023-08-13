import Project from "@/models/projectModel";
import User from "@/models/userModel";
import { uploads } from "@/utils/cloudinary";
import upload from "@/utils/multer";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { title, description, tags, liveLink, sourceLink } = reqBody.project;
        const { email, author } = reqBody;

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found",
            });
        }
        const thumbnail = reqBody.project.thumbnail;
        if (!thumbnail) {
            return NextResponse.json({
                success: false,
                message: "Thumbnail image not provided",
            });
        }

        // Use multer middleware here
        const multerUpload = upload.single("thumbnail");
        multerUpload(request, null, async (err) => {
            if (err) {
                console.error("Multer error:", err);
                return NextResponse.json({
                    success: false,
                    message: "File upload error",
                });
            }
        });

        // File upload was successful, now upload to Cloudinary
        const cloudinaryResponse = await uploads(thumbnail, "ShowCase/projectThumbnails");
        const project = new Project({
            userEmail: email,
            author: author,
            title: title,
            description: description,
            tags: tags,
            thumbnail: cloudinaryResponse.public_id,
            liveLink: liveLink,
            sourceLink: sourceLink,
        });
        await project.save();
        return NextResponse.json({
            success: true,
            message: "Project added successfully",
        });

    } catch (error) {
        console.error("Error:", error.message);
        return NextResponse.json({
            success: false,
            message: "An error occurred",
        });
    }
}