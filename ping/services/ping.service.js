'use strict';

var amqpAdapter = require('../adapters/amqp')(pongMsgHandler);
//var requests = {};
var callBacks = {};

exports.sendMessage = function(cb) {

    // do something complicated and awesome !!!

    var msg = {msg:'PING_MESSAGE'};
    Object.id(msg);
    //requests[msg.__uniqueid] = res;
    callBacks[msg.__uniqueid] = cb;
    amqpAdapter.sendMessage(JSON.stringify(msg));
};

function pongMsgHandler(msg){
    //do something with the response !!!
    msg = JSON.parse(msg);
    //requests[msg.__uniqueid].send('DONE');
    callBacks[msg.__uniqueid](msg);
    //delete requests[msg.__uniqueid];

}

(function() {
    if ( typeof Object.id == "undefined" ) {
        var id = 0;

        Object.id = function(o) {
            if ( typeof o.__uniqueid == "undefined" ) {
                Object.defineProperty(o, "__uniqueid", {
                    value: ++id,
                    enumerable: true,
                    // This could go either way, depending on your
                    // interpretation of what an "id" is
                    writable: false
                });
            }

            return o.__uniqueid;
        };
    }
})();