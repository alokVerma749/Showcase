import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: [true, "user email missing"]
    },
    author: {
        type: String,
        required: [true, "author missing"]
    },
    title: {
        type: String,
        required: [true, "title is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    tags: {
        type: Array
    },
    image: {
        type: String
    },
    liveLink: {
        type: String
    },
    sourceLink: {
        type: String
    },
    thumbnail: {
        type: String
    },
})


const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;