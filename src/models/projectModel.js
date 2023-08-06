import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
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
})


const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;