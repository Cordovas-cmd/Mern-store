// not doing this because it's considered older and we're doing ES6
// const express = require("express");

import express from "express";
import { initializeDbConnection } from "./db";
const PORT = process.env.PORT || 8080


const app = express();
app.use(express.json());

// dummy route to test of server is working with a visual message in browser.
app.get("/ping", (req,res) => {
    console.log("Recieved a ping... responding with a pong...")
    res.send("PONG back at you...😎 ")
})

// initialize connection to the database using the initializeDbConnection function, ONLY once that's done *then* launch app on port
initializeDbConnection().then(() => {
    app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}...`))
})


console.log("Server is started...");