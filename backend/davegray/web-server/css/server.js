const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.sendFile();
    // res.send("Loki this side");
});

app.listen(PORT, () => console.log(`SERVER running on PORT ${PORT} ...`));
