import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI!; // its my guarantee that you will get it
const DB_NAME = "primary";

if (!MONGODB_URI) {
	throw new Error("Mongo DB URI is missing in env file");
}

const cachedConnection = global.mongoose ?? { conn: null, promise: null }; // nullish coalescing

export async function connectToDB() {
	// connection already present
	if (cachedConnection.conn) return cachedConnection.conn;

	// if connection promise is not present store the promise ref
	if (!cachedConnection.promise) {
		const opts = {
			bufferCommands: true,
			maxPoolSize: 10, // max db connections allowed
		};

		cachedConnection.promise = mongoose
			.connect(`${MONGODB_URI}/${DB_NAME}`, opts)
			.then(() => mongoose.connection);
	}

	// save the connection by resolving the promise
	try {
		cachedConnection.conn = await cachedConnection.promise;
	} catch (error: unknown) {
		cachedConnection.promise = null;
		throw new Error("!!! Failed to connect to DB !!! ", error);
	}

	return cachedConnection.conn;
}
