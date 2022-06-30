const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const avatarpath= '/upload/user/img';

const appschema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    avatar : {
        type :String,
        require : true
    }
});

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname,"..",avatarpath));
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+"-"+file.fieldname);
        // console.log(file);
    }
});

appschema.statics.upload = multer({storage : storage}).single('avatar');
appschema.statics.avatarpath = avatarpath;

const appmodel = mongoose.model('database',appschema);
module.exports = appmodel;