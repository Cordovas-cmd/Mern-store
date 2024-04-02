import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signInRoute = {
    path:"/api/sign-in",
    method: "post",
    handler: async(req, res) => {
        // Debug Log
        // console.log("Recieved ping on /api/sign-in");

        const { email, password } = req.body;
        const db = getDbConnection("ecommerce");

        // look into users collection
        const user = await db.collection("users").findOne({email})

        if(!user) return res.status(400).json({message: "unable to sign in.."})

        // grab password hash from user object
        const { passwordHash, _id: uid, firstName, lastName, location} = user
        // use b crypt to to compare the two  returns true or false(dont need to provide salt because bcrypt knows how to conclude the salt from the hash)
        const isCorrect = await bcrypt.compare(password, passwordHash)

        if(!isCorrect) 
        return res.status(400).json({message: "Unable to sign In..."})
        jwt.sign({uid, email, firstName, lastName, location}, process.env.JWT_SECRET, {expiresIn:"2d"}, (error, token) => {
            if(error) return res.sendStatus(500)

            return res.status(200).json({token});
        }
        );
    },
};