// require("dotenv").config({ path: "./env" }); // inconsistent
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: "./env",
});

// api - (err,req,res,next)

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server listening on PORT : ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(`MONGODB connection failed, here's the error ${err}`);
    });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// ;(async () => {})() // professional

// IIFE approach
/*
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        app.on("error", (error) => {
            console.log(`ERROR : ${error}`);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(`ERROR : ${error}`);
        throw error;
    }
})();
*/
