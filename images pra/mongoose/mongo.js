const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/image');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'db error'));
db.once('open',(err)=>{
    if(err){
        console.log('errror db');
        return false;
    }
    console.log('db start.');
});

module.exports= db;