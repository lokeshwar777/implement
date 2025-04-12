import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DATABASE_URI = process.env.DATABASE_URI;

const connectDB = async () => {
    try {
        const conectionInstance = await mongoose.connect(
            `${DATABASE_URI}/${DB_NAME}`
        );
        console.log(`MongoDB connected!!!`);
    } catch (error) {
        console.log(`Error occured connecting to DB : ${error}`);
    }
};

export default connectDB;

// mongoDB sample code
/*

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://lokeshwar777:<db_password>@sample-cluser.cqaauko.mongodb.net/?appName=sample-cluser";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

*/
