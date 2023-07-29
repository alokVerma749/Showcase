import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    subject: {
        type: String
    },
    message: {
        type: String,
        required: [true, "message is required"]
    }
})
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;