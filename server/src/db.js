import { MongoClient } from "mongodb";
import dotenv from "dotenv"
let client;

dotenv.config()

// const PW= process.env.DB_PW;
// const UN= process.env.DB_USER;
const dbURI = process.env.MONGODB_URI || ""; 

// const dbURI = "mongodb+srv://<username>:<password>@cluster0.wj456.mongodb.net/?restryWrites=true&"

export const initializeDbConnection = async () => {
    if(!dbURI) console.log("Unable to access dbURI..");
    client = await MongoClient.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export const getDbConnection = (dbName) => client.db(dbName)