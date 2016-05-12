'use strict';

var express = require('express');
var router = express.Router();
var pongController = require('./pong.controller.js');

router.get('/message/count', pongController.messageCount);

module.exports = router;