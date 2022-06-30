const { default: mongoose } = require('mongoose');
const monogoose = require('mongoose');
mongoose.connect('mongodb://localhost/imgdata');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'erorr on db'));
db.once('open',(err)=>{
    if(err){
        console.log('error open db');
        return false;
    }
    console.log('db runing....');
});

module.exports = db;