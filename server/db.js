import { MongoClient } from "mongodb";
import dotenv from "dotenv"
let client;

dotenv.config()

const PW= process.env.DB_PW;
const UN= process.env.DB_USER;
const dbURI = `mongodb+srv://${UN}:${PW}@cluster0.wj456.mongodb.net/`
// const dbURI = "mongodb+srv://<username>:<password>@cluster0.wj456.mongodb.net/?restryWrites=true&"

export const initializeDbConnection = async () => {
    client = await MongoClient.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export const getDbConnection = (dbName) => client.db(dbName)