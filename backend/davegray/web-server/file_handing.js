const log = console.log;
/**
 * node runs on a server , not browser
 * console is terminal window
 * global(backend) instead of window(frontend)
 * common core modules
 * commonJS modules instead of ES6 modules
 * imports and exports - commonJS(require) and (modular)ES6(import from)
 * readFile,writeFile - asynchornous ops
 * nested ops lead to callback hell, so we use async/await to avoid it
 * file handling - fs, fsPromises
 * create(copyFile,link),read(readFile),write(writeFile),rename(overwrite if new exists),delete(unlink)
 */

// console.log(global);

const os = require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);

const path = require("path");
// console.log(path.dirname(__filename)); // same as __dirname
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

const math = require("../math");
const { mul, div } = require("../math");
// console.log(math.add(1, 2));
// console.log(math.sub(1, 2));
// console.log(mul(1, 2));
// console.log(div(1, 2));

const fs = require("fs");

// fs.readFile("./read_file.txt", "utf-8", (error, data) => { // alternative (not recommended)

// fs.readFile(path.join(__dirname, "read_file.txt"), "utf-8", (error, data) => {
//     if (error) throw error;
//     // console.log(data.toString()); // instead of "utf-8"
//     console.log(data);
// });

console.log("this is console log statement");

// const contents = `writeFile creates the file if it doesn't exists and overwrite the contents to it`;

// fs.writeFile(
//     path.join(__dirname, "write_file.txt"),
//     contents,
//     (error, data) => {
//         if (error) throw error;
//         console.log(data);
//     }
// );

// fs.appendFile(
//     path.join(__dirname, "append_file.txt"),
//     `appendFile creates the file if it doesn't exists and appends the contents to it if it exists`,
//     (error, data) => {
//         if (error) throw error;
//         console.log(data);
//     }
// );

// nested ops lead to callback hell
// fs.writeFile(
//     path.join(__dirname, "old_write_file.txt"),
//     `This is the text written using writeFile method`,
//     (error) => {
//         if (error) throw error;
//         console.log("Write complete");

//         fs.appendFile(
//             path.join(__dirname, "old_write_file.txt"),
//             `This text is added using appendFile method`,
//             (error) => {
//                 if (error) throw error;
//                 console.log("Append complete");

//                 fs.rename(
//                     path.join(__dirname, "old_write_file.txt"),
//                     path.join(__dirname, "new_write_file.txt"),
//                     (error) => {
//                         if (error) throw error;
//                         console.log("Rename complete ");
//                     }
//                 );
//             }
//         );
//     }
// );

const fsPromises = require("fs").promises;
const fileOps = async () => {
    const data = await fsPromises.readFile(
        path.join(__dirname, "read_file.txt"),
        "utf-8"
    );
    console.log("Read complete", data);

    await fsPromises.writeFile(
        path.join(__dirname, "old_write_file.txt"),
        data
    );
    console.log("Write complete");

    await fsPromises.appendFile(
        path.join(__dirname, "old_write_file.txt"),
        `\nThis text is added using appendFile method`
    );
    console.log("Append complete");

    // await fsPromises.rename(
    //     path.join(__dirname, "old_write_file.txt"),
    //     path.join(__dirname, "new_write_file.txt")
    // );
    // console.log("Rename complete");

    await fsPromises.copyFile(
        path.join(__dirname, "read_file.txt"),
        path.join(__dirname, "duplicate.txt")
    );
    console.log("Duplicate file created.");

    // await fsPromises.unlink(path.join(__dirname, "duplicate.txt"));
    // console.log("Duplicate file deleted.");

    try {
    } catch (error) {
        console.error(error);
    }
};

// fileOps();

// deleting a file
// fsPromises.unlink(path.join(__dirname, "file_name.txt"));

// copied vscode keyboard shortcuts file
// (async () => {
//         await fsPromises.copyFile(
//         path.join(
//             os.homedir(),
//             "/Library/Application Support/Code/User/keybindings.json"
//         ),
//         "/Users/lokeshwar777/developer/implement/.vscode/keybindings.json"
//     );
// })();

// TODO : understand difference between copyFile vs link
const copy_file_method = async () => {
    await fsPromises.copyFile(
        path.join(__dirname, "read_file.txt"),
        path.join(__dirname, "copied_file.txt")
    );
};
const link_file_method = async () => {
    // incomplete
    await fsPromises.link();
};

// stream
const readStream = fs.createReadStream("./read_stream_file.txt", {
    encoding: "utf8",
});
const writeStream = fs.createWriteStream("./write_stream_file.txt");

// readStream.on("data", (chunk) => {
//     writeStream.write(chunk);
// });

// or

// readStream.pipe(writeStream);

const createDir = (dirName) => {
    // if (!fs.exists()) { // depricated
    if (!fs.existsSync(`./${dirName}`)) {
        fs.mkdir(`./${dirName}`, (error) => {
            if (error) throw error;
            console.log("Directory created.");
        });
    }
};
// createDir("temp_dir");

const deleteDir = (dirName) => {
    // if (!fs.exists()) { // depricated
    if (fs.existsSync(`./${dirName}`)) {
        fs.rmdir(`./${dirName}`, (error) => {
            if (error) throw error;
            console.log("Directory deleted.");
        });
    }
};
// deleteDir("temp_dir");

const chalk = require("chalk");

// exit on uncaught errors
process.on("uncaughtException", (error) => {
    log(
        `${chalk.yellow(
            "Hey Loki, there's an error dangling around. Have a look at it"
        )} : \n
        ${chalk.cyanBright(error)}\n`
    );
    process.exit(1);
});
