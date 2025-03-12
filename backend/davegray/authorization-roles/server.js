const path = require("path");
const express = require("express");
const app = express();
const { logger } = require("./middleware/logEvents");
const credentials = require("./middleware/credentials");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 8080;

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
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use(verifyJWT);
app.use("/api/employees", require("./routes/api/employees"));

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

app.listen(PORT, () => console.log(`SERVER running on PORT ${PORT} ...`));
