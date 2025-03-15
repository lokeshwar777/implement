const mongoose = require("mongoose");

const DB_NAME = "CompanyDB";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.DATABASE_URI}/${DB_NAME}`,
            {
                // useUnifiedTopology: true, // depricated
                // useNewUrlParser: true, // depricated
            }
        );
        // console.log("connectionInstance", connectionInstance);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
