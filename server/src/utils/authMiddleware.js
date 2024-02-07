import jwt from "jsonwebtoken"


export const authMiddleware = (req, res, next) => {
 const {authorization} = req.headers;
 if (!authorization) 
 return res.status(401).json({message: "No token provided"})

//  create an array where first element/index will be bearer and second will be token
const [bearer, token] = authorization.split(" ");
if (bearer !== "Bearer" || !token) 
return res.status(401).json({message: "Invalid Token Provided"})


// validate, return error object and decoded object
jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if(error) 
    return res.status(401).json({message: "Invalid Token Provided"});

// get uid and email from decoded obj
    const {uid, email} = decoded;
    // add the keys into my req body so I can access them later without having to look up uid of user
    req.body.uid = uid;
    req.body.email = email;

    // if all is good handle next middleware
    next();
})

}