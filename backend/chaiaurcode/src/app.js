import express from "express";
import { registerUser } from "./controllers/user.controller";
const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));

// express has default body parser

// special characters from url, "extended" for nested objects
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// for storing public assets and static files
app.use(express.static("public"));

// using cookies securely
app.use(cookieParser());

import userRouter from "./routes/user.route";

app.use("/api/v1/users", userRouter);

export { app };
