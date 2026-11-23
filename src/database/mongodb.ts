import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

const databaseUri = DB_URI;

if (!databaseUri) {
    throw new Error(
        `Please define the DB_URI environment variable inside the .env.${NODE_ENV}.local`
    );
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(databaseUri);
        console.log(`Connected to database in ${NODE_ENV} mode`);
    } catch (error) {
        console.error("Error connecting to database: ", error);

        process.exit(1);
    }
};

export default connectToDatabase;