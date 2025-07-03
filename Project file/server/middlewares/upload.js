import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from 'path'

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/images/');
    },
    filename: function(req,file,cb){
        cb(null,uuidv4() + '-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req,file,cb) => {
    const allowedFileTypes = ['image/jpeg','image/jpeg','image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb(null,false);
    }
}

export const upload  = multer({storage,fileFilter})