import { Router } from "express";
import { getAllTweets } from "../controllers/twetts.controller.js";

const route = Router();

route.get("/", getAllTweets);

export default route;
