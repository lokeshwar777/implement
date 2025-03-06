import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String, // note that is it String but not string
            required: true,
            unique: true,
            lowercase: true,
        },
        image: {
            type: String,
        },
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
    },
    { timestamps: true } // createdAt,updatedAt
);

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
