// require("dotenv").config({ path: "./env" }); // inconsistent
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
    path: "./env",
});

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));

// express has default body parser

// special characters from url, extended for nested objects
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// for storing public assets and static files
app.use(express.static("public"));

// using cookies securely
app.use(cookieParser());

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
            `${ProcessingInstruction.env.MONGODB_URI}/${DB_NAME}`
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

export { app };
