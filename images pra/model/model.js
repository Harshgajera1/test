const { strict } = require('assert');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const avatarpath = '/uploads/user/img';

const imgschema = mongoose.Schema({
    name : {type : String},
    gender : {type : String},
    hobby : {type : Array},
    language: {type : String},
    avatar  :{type : String}
});

let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname, ".." ,avatarpath));
    },
    filename : (req,file,cb)=>{
        cb(null, Date.now()+'-'+file.originalname);
        // console.log(file);
    }
});

imgschema.statics.uploadimg = multer({storage: storage}).single('avatar');
imgschema.statics.avatarpath = avatarpath;

// console.log(`${path.join(__dirname, ".." ,avatarpath)}`);


const img = mongoose.model('ima',imgschema);
module.exports= img;