const express = require('express');
const router = express.Router();

const newController =require('../app/controller/NewsController');

//newControllew.index
router.use('/',newController.index);

module.exports = router;