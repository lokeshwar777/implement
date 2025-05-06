import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI!; // its my guarantee that you will get it

if (!MONGODB_URI) {
    throw new Error('Mongo DB URI is missing in env file');
}

const cachedConnection = global.mongoose ?? { conn: null, promise: null }; // nullish coalescing

export async function connectToDB() {
    if (cachedConnection.conn) return cachedConnection.conn;

    if (!cachedConnection.promise) {
        const opts = {
            bufferCommands: true,
            maxPoolSize: 10,
        };

        cachedConnection.promise = mongoose
            .connect(MONGODB_URI, opts)
            .then(() => mongoose.connection);
    }

    try {
        cachedConnection.conn = await cachedConnection.promise;
    } catch (error: unknown) {
        cachedConnection.promise = null;
        throw new Error('!!! Failed to connect to DB !!! ', error);
    }

    return cachedConnection.conn;
}
