const express = require('express');

const router = express.Router();
const controller = require('../controller/controller');

router.get('/',controller.start);
router.post('/insertdata',controller.insert);
router.get('/showdata',controller.show);
router.get('/deletedata/:id',controller.delete);
router.get('/updatedata',controller.update);
router.post('/editdata',controller.edit);

module.exports = router;