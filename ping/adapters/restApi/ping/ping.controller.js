'use strict';

var pingService = require('../../../services/ping.service');

exports.sendMessage = function(req, res) {
    pingService.sendMessage(function(msg){
        res.json({status:'done', msg: msg});
    });
};