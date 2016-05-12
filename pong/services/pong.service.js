'use strict';

var amqpAdapter = require('../adapters/amqp');
var messageCountSinceUp = 0;
var lastMessage = 'not received yet';

var sendMessage = function(msg) {
    amqpAdapter.sendMessage(msg);
};

exports.getMessageCounters = function(){
  return {messagesProcessed: messageCountSinceUp, lastMessageId: lastMessage};
};


exports.pingMsgHandler = function pingMsgHandler (msg){
    //do something with the response !!!
    setTimeout(function() {
        messageCountSinceUp ++;
        lastMessage = JSON.parse(msg.content.toString()).__uniqueid;
        sendMessage(msg.content.toString())
    },  2000);
};