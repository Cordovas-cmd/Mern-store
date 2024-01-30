import { getDbConnection } from "../db";
import bcrypt from "bcrypt"

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

        console.log(`InsertedId is ${insertedId}`);

        return res.sendStatus(200);
    }

}