// This is notes for creating any scheman using mongoose (all mix)
import mongoose from "mongoose";
// import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String, // note that is it String but not string
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        image: String,
        count: {
            type: Number,
            default: 0,
        },
        userFriends: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User", // self reference
                required: true, // good practice
            },
        ], // can also be done using : [SchemaName]
        status: {
            type: String,
            enum: ["DONE", "ON GOING", "NOT STARTED"],
        },
        // video app fields
        avatar: {
            // or videoFile, thumbnail
            type: String, // cloudinary url
            required: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        refreshToke: String,
    },
    { timestamps: true } // createdAt,updatedAt
);

// extra fields you might need
// title,description,duration,views,isPublished,owner

userSchema.plugin(mongooseAggregatePaginate);

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = bcrypt.hash(this.password, 10);
    }
    next();
}); // do not use ()=>{}

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

userSchema.methods.generateRefreshToken = async function () {
    jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

export const User = mongoose.model("User", userSchema);
// always try to keep User and "User" as same
// this is stored in the db as users, even ToDo is stored as todos instead of todoes

/**
 * my interpretation
 * mongoose data fields : string | Object {
 * }
 * always first create independent schemas before dependent ones
 * image urls are stored as we can't store raw files
 * type+ref -> go along together
 */
