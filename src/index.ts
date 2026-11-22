import express from "express";
import type { Express } from "express";

const PORT = 5500;

const app: Express = express();

app.listen(PORT, (): void => {
    console.log(`Server running on port: ${PORT}`);
})