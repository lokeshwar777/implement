import mongoose, { Schema } from "mongoose";

const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{3,23}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // GPT
const mobileNumberRegex = /^+?(d{1,4})?(d{7,15})$/;

const userSchma = new Schema(
    {
        fullName: {
            type: String,
            required: [true, "Full name is required"],
            trim: true,
        },
        username: {
            type: String,
            unique: true,
            index: true,
            sparse: true,
            trim: true,
            match: [usernameRegex, "Invalid username format"],
        },
        email: {
            type: String,
            unique: true,
            index: true,
            sparse: true,
            trim: true,
            lowercase: true,
            match: [emailRegex, "Invalid email format"],
        },
        mobileNumber: {
            type: Number,
            match: [mobileNumberRegex, "Invalid mobile number format"],
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 24,
            match: [passwordRegex, "Invalid username format"],
        },
        roles: {
            type: String,
            enum: ["user", "moderator", "admin", "superadmin"],
            default: "user",
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        verifyToken: String,
        refreshVerifyToken: String,
        accessToken: String,
        refreshAccessToken: String,
        resetPasswordToken: String,
        resetPasswordTokenExpiry: String,
        bio: {
            type: String,
            default: "",
            maxlength: 160,
        },
        profilePicture: String,
        backgroundImage: String,
        dateOfBirth: {
            type: Date,
        },
        age: {
            type: Number,
        },
        location: {
            type: String,
            trim: true,
        },
        socials: {
            linkedin: {
                type: String,
                trim: true,
                default: "",
            },
            github: {
                type: String,
                trim: true,
                default: "",
            },
            twitter: {
                type: String,
                trim: true,
                default: "",
            },
            leetcode: {
                type: String,
                trim: true,
                default: "",
            },
        },
        twoFactorEnabled: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        lastLogin: {
            type: Date,
            default: Date.now,
        },
        loginAttempts: {
            type: Number,
            default: 0,
        },
        devicesInfo: {
            type: Array,
        },
    },
    { timestamps: true }
);

/* 
// slower so do this during api handling
userSchma.pre("validate", function (next) {
    if (!this.email && !this.username) {
        this.invalidate("username", "Either username or email is required");
        this.invalidate("email", "Either username or email is required");
    }
    next();
});
*/

const User = mongoose.model("Users") || new mongoose.Model("user", userSchma);

export default User;
