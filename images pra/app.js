const express = require('express');
const app = express();
const path = require('path');
const db = require('./mongoose/mongo');
app.use(express.urlencoded());
app.use("/uploads",express.static(__dirname+"/uploads"));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use('/',require('./router'));

app.listen(2000,(err)=>{
    if(err){
        console.log('server errror');
        return false;
    }
    console.log('server start port no: 2000');
});