const appmodel = require('../model/model');
const fs = require('fs');
const path = require('path');

module.exports.start = (req,res)=>{
    return res.render('home');
}

module.exports.insert = (req,res)=>{
    // console.log(req.body);
    // console.log(req.file);
    appmodel.upload(req,res,(err,data)=>{
        if(err){
            console.log('error insert');
            return false;
        }
        // console.log(req.body);
        // console.log(req.file);
        if(req.file){
            avatar = appmodel.avatarpath+"/"+req.file.filename;
        }
            // console.log(avatar);
        appmodel.create({
            name : req.body.name,
            avatar : avatar
        },(err,data)=>{
            if(err){
                console.log('error insert');
                return false;
            }
            // console.log(data);
            return res.redirect('back');
        });
    });
}


module.exports.show = (req,res)=>{
    appmodel.find({},(err,data)=>{
        if(err){
            console.log('error show');
            return false;
        }
        // console.log(data);
        return res.render('show',{record : data});
    });
}

module.exports.delete = (req,res)=>{
    // console.log(req.params.id);
    var id = req.params.id;
    appmodel.findById(id,(err,data)=>{
        if(err){
            console.log('error delete');
            return false;
        }
        // console.log(data);
        if(data.avatar){
            fs.unlinkSync(path.join(__dirname,"..",data.avatar));
        }
        appmodel.findByIdAndDelete(id,(err,data)=>{
            if(err){
                console.log('error delete');
                return false;
            }
            return res.redirect('back');
        });
    });
}

module.exports.update = (req,res)=>{
    // console.log(req.query.id);
    var id = req.query.id;
    appmodel.findById(id,(err,data)=>{
        if(err){
            console.log('error update');
            return false;
        }
        // console.log(data);
        return res.render('update',{data : data});
    });
}

module.exports.edit = (req,res)=>{
    // console.log(req.body);
    // console.log(req.file);
    appmodel.upload(req,res,(err)=>{
        if(err){
            console.log('error upload');
            return false;
        }
        console.log(req.body);
        // console.log(req.file);
        if(req.file){
            appmodel.findById(req.body.id,(err,data)=>{
                if(err){
                    console.log('error edit');
                    return false;
                }
                console.log(data);
            })
        }
    })  
}