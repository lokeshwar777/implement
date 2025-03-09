const path = require("path");
const express = require("express");
const app = express();
const { logger } = require("./middleware/logEvents");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 8080;

// MIDDLEWARES
app.use(logger);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// serve static files
app.use(express.static(path.join(__dirname, "/public")));
app.use("/subdir", express.static(path.join(__dirname, "/public"))); // default is '/', so that css also applies to the html pages in the subdir

// ROUTES
app.use("/", require("./routes/root"));
app.use("/subdir", require("./routes/subdir"));
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
