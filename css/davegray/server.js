// const express = require("express"); // commonJS
import express from "express";
import url from "url";
import path from "path";

const PORT = process.env.PORT || 7777;

const app = express();

const fileUrl = import.meta.url; // ES6
const __filename = url.fileURLToPath(fileUrl); // ES6
const __dirname = path.dirname(__filename); // ES6

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
});
