import { Connection } from "mongoose";

declare global {
    const global: {
        conn: Connection | null;
        promise: Promise<Connection> | null;
    };
}
