import { Router } from "express";
const route = Router();

route.get("/", (req, res) => {
    res.send('hola a todos')
});

export default route;
