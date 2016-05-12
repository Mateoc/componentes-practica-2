'use strict';

var amqp = require('amqplib/callback_api');

var ch, pongCb;
module.exports = function(msgCb){
    pongCb = msgCb;
    return {
        'sendMessage': sendMessage
    }
};

amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, channel) {
        ch = channel;

        ch.assertQueue('ping', {durable: false});
        ch.assertQueue('pong', {durable: false});
        ch.consume('pong', function(msg) {
             pongCb(msg.content.toString());
        }, {noAck: true});
    });
});

var sendMessage = function (msg){
    var buffer = new Buffer(msg);
    ch.sendToQueue('ping', buffer, {persistent: true});
};