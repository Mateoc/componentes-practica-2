'use strict';

var amqp = require('amqplib/callback_api');
var pongService = require('../../services/pong.service');

var ch;

amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, channel) {
        ch = channel;

        ch.assertQueue('ping', {durable: false});
        ch.assertQueue('pong', {durable: false});
        ch.consume('ping', function(msg) {
            pongService.pingMsgHandler(msg, ch);
        }, {noAck: true});
    });
});

exports.sendMessage = function (msg){
    var buffer = new Buffer(msg);
    ch.sendToQueue('pong', buffer, {persistent: true});
};