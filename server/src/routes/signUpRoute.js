import { getDbConnection } from "../db";


// describe the route to our server using properties (for now)
export const signUpRoute ={
    path:"/api/signup",
    method:"post",
    handler: async (req,res) => {

        // Debug log 
        console.log("Recieved a POST request on /api/signup");


        const {email, password} = req.body
        if(!email || !password) return res.sendStatus(500);

        // Debug log 
        console.log(`Email: ${email}, password: ${password}`)

        const db = getDbConnection('ecommerce')
        // fyi: collections are just like folders in a nosql database or tables in sql
        const result = await db.collection("users").insertOne({
            email,
            password
        })
        if(!result) return res.sendStatus(500);

        // mongo provides insertedId when successful
        const { insertedId } = result;

        console.log(`InsertedId is ${insertedId}`);

        return res.sendStatus(200);
    }

}