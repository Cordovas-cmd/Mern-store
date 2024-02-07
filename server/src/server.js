// not doing this because it's considered older and we're doing ES6
// const express = require("express");

import express from "express";
import { initializeDbConnection } from "./db";
import {routes} from "./routes"
import { authMiddleware } from "./utils/authMiddleware";
import { protectedRoutes } from "./protectedRoutes";
const PORT = process.env.PORT || 3001


const app = express();
app.use(express.json());


// dummy route to test of server is working with a visual message in browser.
app.get("/ping", (req,res) => {
    res.send("PONG back at you...😎 ");;
})


// spread them
routes.map((route) => app[route.method](route.path, route.handler))

// each request will go through all the routes and if none of them are open will run through auth which will check for the correct token if correct provided it will run through protected routes
app.use("/", authMiddleware);

protectedRoutes.map(route => app[route.method](route.path, route.handler))


// initialize connection to the database using the initializeDbConnection function, ONLY once that's done *then* launch app on port
initializeDbConnection().then(() => {
    app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}...`))
})


console.log("Server is started...");