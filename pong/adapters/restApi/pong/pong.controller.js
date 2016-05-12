'use strict';

var pongService = require('../../../services/pong.service.js');

exports.messageCount = function(req, res) {
    res.status(200).json( pongService.getMessageCounters());
};