const express = require('express');
const router = express.Router();
const appcont = require('../controller/appcontroller');

router.get('/',appcont.start);
router.post('/insertdata',appcont.insert);
router.get('/showdata',appcont.show);
router.get('/deletedata/:id',appcont.delete);
router.get('/updatedata',appcont.update);
router.post('/editdata',appcont.edit);

module.exports= router;