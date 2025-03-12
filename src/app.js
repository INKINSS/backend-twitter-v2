import express from "express";
import routes from './routes/app.routes.js'
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(routes);

export default app;
