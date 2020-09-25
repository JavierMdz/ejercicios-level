const express = require('express');
const controller = require('../controllers/personacontroladores');
const router = (express.Router());
const pcont = require('../controllers/personacontroladores');

router.get('/', pcont.list());

module.exports=router;