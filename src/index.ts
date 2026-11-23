import express from "express";
import type { Express } from "express";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";

const app: Express = express();

app.use(express.json());

app.listen(PORT, async () => {
    console.log(`Server running on port: ${PORT}`);
    await connectToDatabase();
})