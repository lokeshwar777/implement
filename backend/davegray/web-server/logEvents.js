/*
const { format } = require("date-fns");

console.log(format(new Date(), "yyyy MM dd HH:mm:ss"));

// const uuid = require("uuid");
// console.log(uuid.v4());

const { v4: uuid } = require("uuid");
console.log(uuid());
*/

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// use fs for check, and fsPromises for CRUD

const handleEvents = async (message, fieName) => {
    try {
        // create a logs dir if it doesn't exists
        if (!fs.existsSync("./logs")) {
            await fsPromises.mkdir("./logs", (error) => {
                if (error) throw error;
                // console.log("logs directory created.");
            });
        }

        const logInfo = `${format(
            new Date(),
            "hh:mm:ss dd MM yyyy"
        )}\t${uuid()}\t${message}\n`;

        // write logs
        await fsPromises.appendFile(
            path.join(__dirname, "logs", fieName),
            logInfo,
            (error) => {
                if (error) throw error;
                // console.log("Sucessfully added logs to logs_file. Go check em out!");
            }
        );
    } catch (error) {
        console.error(error);
    }
};

module.exports = handleEvents;
