import express from "express";
import route from "./routes/app.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(route);

export default app;
