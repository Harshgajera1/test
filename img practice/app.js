const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/mongo');
app.use('/upload',express.static(__dirname+'/upload'));
app.use(express.urlencoded());
app.use('/',require("./router"));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));

app.listen(8000,(err)=>{
    if(err){
        console.log('error server');
        return false;
    }
    console.log('server start port no: 8000');
});
