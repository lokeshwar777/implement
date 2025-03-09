const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

// MIDDLEWARES

// custom middleware logger
// const { logEvents } = require("./middleware/logEvents");
// app.use((req, res, next) => {
//     logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
//     console.log(`${req.method} ${req.path}`);
//     next();
// });

const { logger } = require("./middleware/logEvents");
app.use(logger);

// cross origin resource sharing
const whitelist = [
    // "https://www.google.com",
    "http://127.0.0.1:5500",
    "http://localhost:8080",
];

// you might get origin as undefined in dev env, so use !origin
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions)); // TODO : Research this
// app.use(cors()); // open to all

// built-in middleware to handle urlencoded data - form data
// `content-type: application/x-www-form-urlencoded`
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("^/$|/index(.html)?", (req, res) => {
    // res.send("Loki this side");
    // res.sendFile("./views/index.html", { root: __dirname });
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
    res.redirect(301, "new-page.html"); // 302 is default
});

// Route handlers
app.get(
    "/hello(.html)?",
    (req, res, next) => {
        console.log("we are in hello route, trying out next one");
        next();
    },
    (req, res) => {
        res.send("Hello from next");
    }
);

// chaining routes
const one = (req, res, next) => {
    console.log("we are in one");
    next();
};
const two = (req, res, next) => {
    console.log("we are in two");
    next();
};
const three = (req, res) => {
    console.log("we are in three");
    res.send("Hello at last");
};

app.get("/chain", [one, two, three]);

// default page

// app.get("/*", (req, res) => {
//     res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });

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

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(PORT, () => console.log(`SERVER running on PORT ${PORT} ...`));
