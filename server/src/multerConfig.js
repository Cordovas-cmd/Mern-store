import multer from "multer";
import path from "path";


// tell multer we want to store the files that we get,.
const storage = multer.diskStorage({
destination: (req, file, cb) => {
    // tell multer we want files to be stored in the uploads folder.
    cb(null, "uploads")
},
filname: (req, file, cb)=>{
    cb(null, `P${Date.now()}${path.extname(file.originalname)}`);
},
});


export const upload = multer({ storage });