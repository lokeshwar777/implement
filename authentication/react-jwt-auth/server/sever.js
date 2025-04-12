import "@dotenvx/dotenvx/config";
import express from "express";
import connectDB from "./db/index.js";
import { userRouter } from "./routes/index.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Good to go..." });
});

app.listen(PORT, () => {
    console.log(`Server listening... PORT : ${PORT}`);
});

await connectDB();
