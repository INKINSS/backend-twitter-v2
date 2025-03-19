import { Router } from "express";
import { getCurrentTweets } from "../controllers/twetts.controller.js";

const route = Router();

route.get("/", getCurrentTweets);

export default route;
