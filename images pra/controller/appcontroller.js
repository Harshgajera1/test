const imgdata = require('../model/model');


module.exports.start = (req,res)=>{
    return res.render('home',{title : 'This is home page.'});
}

module.exports.insert = (req,res)=>{
    // console.log(req.body);
    // console.log(req.file);
    imgdata.uploadimg(req,res,(err)=>{
        if(err){
            console.log('error upload');
            return false;
        }
        // console.log(req.body);
        // console.log(req.file);
        if(req.file){
            avatar = imgdata.avatarpath+"/"+req.file.filename;
        }   
        // console.log(avatar);
        imgdata.create({
            name : req.body.name,
            gender : req.body.gender,
            hobby : req.body.hobby,
            language : req.body.language,
            avatar : avatar,
        },(err,data)=>{
            if(err){
                console.log('insert error');
                return false;
            }
            // console.log(data);
            return res.redirect('back');
        });
    });
}

module.exports.show= (req,res)=>{
    imgdata.find({},(err,data)=>{
        if(err){
            console.log('show error');
            return false;
        }
        return res.render('show',{title: 'This is Show Page.',appdata : data});
    })
}


module.exports.delete = (req,res)=>{
    // console.log(req.params.id);
    imgdata.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            console.log('error delete');
            return false;
        }
        return res.redirect('back');
    });
}

module.exports.update = (req,res)=>{
    // console.log(req.query.id);
    imgdata.findById(req.query.id,(err,data)=>{
        if(err){
            console.log('error update');
            return false;
        }
        // console.log(data);
        return res.render('update',{title: 'This is Update page.',updata : data});
    });
    
}



module.exports.edit = (req,res)=>{
    // console.log(req.body);
    imgdata.findByIdAndUpdate(req.body.id,{
        name : req.body.name,
        gender : req.body.gender,
        hobby : req.body.hobby,
        language : req.body.language,
    },(err,data)=>{
        if(err){
            console.log('error update');
            return false;
        }
        console.log(data);
        return res.redirect('/showdata');
    });
}