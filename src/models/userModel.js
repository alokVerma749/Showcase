import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'field is required']
    },
    email: {
        type: String,
        required: [true, 'field is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'field is required']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: String,
    verifyToken: String,
    verifyTokenExpiry: String,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;