import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import * as dotenv from "dotenv"

// describe the route to our server using properties (for now)
export const signUpRoute ={
    path:"/api/signup",
    method:"post",
    handler: async (req,res) => {

        // Debug log 
        console.log("Recieved a POST request on /api/signup");


        const {email, password} = req.body
        if(!email || !password) return res.sendStatus(500);


        // define salt rounds (bcrypt algo that scales depending on system)
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const passwordHash = await bcrypt.hash(password, salt);

        
        // Debug log 
        // get visual on our password before and after.
        console.log(`Password:${password}\nSalt: ${salt}\nHash:${passwordHash}`);
        console.log(`Email: ${email}, password: ${password}`)

        const db = getDbConnection('ecommerce')
        // fyi: collections are just like folders in a nosql database or tables in sql
        const result = await db.collection("users").insertOne({
            email,
            passwordHash
        })
        if(!result) return res.sendStatus(500);

        // mongo provides insertedId when successful
        const { insertedId } = result;

        // dotenv.config()

        // create token/ specify secret
        jwt.sign({uid:insertedId, email}, process.env.JWT_SECRET, {expiresIn: "2d"},
        (error, token) => {
            if(error){
                // log error
                console.log("Error generating jwt token: \n", error);
                // notify user
                return res.status(500).send(error)
            }
            return res.status(200).json( { token })
        })
    }

}