require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const { logger } = require("./middleware/logEvents.js");
const credentials = require("./middleware/credentials.js");
const cors = require("cors");
const corsOptions = require("./config/corsOptions.js");
const errorHandler = require("./middleware/errorHandler.js");
const verifyJWT = require("./middleware/verifyJWT.js");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn.js");
const PORT = process.env.PORT || 8080;

// DATABASE
connectDB(); // connect to MongoDB

// MIDDLEWARES
app.use(logger);
// app.use(credentials); // for fetch(), TODO : fix the pending state
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// serve static files
app.use(express.static(path.join(__dirname, "/public")));

// ROUTES - waterfall
app.use("/", require("./routes/root.js"));
app.use("/register", require("./routes/register.js"));
app.use("/auth", require("./routes/auth.js"));
app.use("/refresh", require("./routes/refresh.js"));
app.use("/logout", require("./routes/logout.js"));

app.use(verifyJWT);
app.use("/api/employees", require("./routes/api/employees.js"));

// all protocols
app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
        res.json({ error: "404 not found" });
    } else {
        res.type("txt").send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
    console.log(`Connected to MongoDB`);
    app.listen(PORT, () => console.log(`SERVER running on PORT ${PORT} ...`));
});
