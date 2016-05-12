'use strict';

var amqpAdapter = require('../adapters/amqp')(pongMsgHnadler);
var requests = {};

exports.sendMessage = function(res) {

    // do something complicated and awesome !!!

    var msg = {msg:'PING_MESSAGE'};
    Object.id(msg);
    requests[msg.__uniqueid] = res;
    amqpAdapter.sendMessage(JSON.stringify(msg));
};

var pongMsgHnadler = function(msg){
    //do something with the response !!!
    requests[msg.__uniqueid].send('DONE');
    delete requests[msg.__uniqueid];

};

(function() {
    if ( typeof Object.id == "undefined" ) {
        var id = 0;

        Object.id = function(o) {
            if ( typeof o.__uniqueid == "undefined" ) {
                Object.defineProperty(o, "__uniqueid", {
                    value: ++id,
                    enumerable: false,
                    // This could go either way, depending on your
                    // interpretation of what an "id" is
                    writable: false
                });
            }

            return o.__uniqueid;
        };
    }
})();