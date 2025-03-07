// emitting events
/*
const handleEvents = require("./logEvents");
const EventEmitter = require("events");
// initialise object
const ee = new EventEmitter();
// add listener for the log event
ee.on("message", async (data) => {
    await handleEvents(data);
});
setTimeout(() => {
    // emit event
    ee.emit("message", "Loki Logged Out");
}, 2000);
*/

// server creation (from documentation)
/*
const http = require("http");
const PORT = process.env.PORT || 8080;

// const server = http.createServer();
// server.on("request", (req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
// res.end(JSON.stringify({ username: "loki777" }));
// });
// is equivalent to
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ username: "loki777" }));
});

server.listen(PORT, () => console.log(`SERVER listening on PORT ${PORT} ...`));

server.on("connection", () => {
    console.log("someone connected");
});

server.on("error", (e) => {
    console.error(`We've got a situation here : ${e}`);
});
*/

const logEvents = require("./logEvents");
const EventEmitter = require("events");
class Emitter extends EventEmitter {}
const myEmitter = new Emitter();
myEmitter.on("log", (msg, fileName) => logEvents(msg, fileName));
const PORT = process.env.PORT || 8080;

const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const serveFile = async (filePath, contentType, res) => {
    try {
        // const data = await fsPromises.readFile(filePath, "utf-8"); // image not visible
        const rawData = await fsPromises.readFile(
            filePath,
            !contentType.includes("image") ? "utf-8" : ""
        );
        const data =
            contentType === "application/json" ? JSON.parse(rawData) : rawData;
        res.writeHead(filePath.includes("404.html") ? 404 : 200, {
            "Content-Type": contentType,
        });
        // res.end(data); // json data is not allowed, The "chunk" argument must be of type string or an instance of Buffer or Uint8Array.
        res.end(
            contentType === "application/json" ? JSON.stringify(data) : data
        ); // good practice
    } catch (error) {
        console.log(error);
        myEmitter.emit(
            "log",
            `${error.name} : ${error.message}`,
            "errorLog.txt"
        );
        res.statusCode = 500;
        res.end();
    }
};

const server = http.createServer((req, res) => {
    /*
    let curr_path;
    if (req.url === "/" || req.url === "index.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        curr_path = path.join(__dirname, "views", "index.html");
        fs.readFile(curr_path, "utf-8", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
    */

    console.log(req.url, req.method);
    myEmitter.emit("log", `${req.url}\t${req.method}`, "requestLog.txt");

    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".jpg":
            contentType = "image/jpeg";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".txt":
            contentType = "text/plain";
            break;
        default:
            contentType = "text/html";
    }

    let filePath =
        contentType === "text/html" && req.url === "/"
            ? path.join(__dirname, "views", "index.html")
            : contentType === "text/html" && req.url.slice(-1) === "/"
            ? path.join(__dirname, "views", req.url, "index.html")
            : contentType === "text/html"
            ? path.join(__dirname, "views", req.url)
            : path.join(__dirname, req.url);

    // console.log(`${contentType},\n ${filePath}`);
    // console.log("req.url", req.url);
    // console.log("extension", extension);
    // console.log("contentType", contentType);
    // console.log("filePath", filePath);

    // for routes without having .html extension
    if (!extension && req.url.slice(-1) !== "/") filePath += ".html";

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        // serve the file
        serveFile(filePath, contentType, res);
    } else {
        switch (path.parse(filePath).base) {
            case "old-page.html":
                res.writeHead(301, { Location: "./new-page.html" });
                res.end();
                break;
            case "www-page.html":
                res.writeHead(301, { Location: "/" });
                res.end();
                break;
            default:
                // serve a 404
                serveFile(
                    path.join(__dirname, "views", "404.html"),
                    "text/html",
                    res
                );
        }
        // 404
        // 301 redirect
        // console.log(path.parse(filePath));
    }
});

server.listen(PORT, () => console.log(`SERVER running on PORT ${PORT} ...`));
