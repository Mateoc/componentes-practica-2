'use strict';

var pingService = require('../../../services/ping.service');

exports.sendMessage = function(req, res) {
    pingService.sendMessage(res);
};