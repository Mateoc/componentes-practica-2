'use strict';

var express = require('express');
var router = express.Router();
var pingController = require('./ping.controller.js');

router.post('/message', pingController.sendMessage);

router.get('/message', pingController.sendMessage);

module.exports = router;