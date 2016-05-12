'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
    if(!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }
    return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(__dirname + '/../../..'),

    // Server port
    port: process.env.PORT || 9000,

    // Should we populate the DB with sample data?
    seedDB: false,

    // Secret for session, you will want to change this and make it an environment variable
    secrets: {
        session: 'demo-secret'
    },

    connections:{
        commerce: {
            urlPrefix: '/api/v1',
            isHttp: false,
            host: 'localhost',
            port: 9002,
            token: 'TDCommerceToken-CHANGE-ME!'
        }
    },

    piwik: {
        URL:          'http://stats.scanther.com/index.php',
        TOKEN_AUTH:   'df51995d96f7ddc18f025daf8bfb0a90'
    }
};


module.exports = _.merge(all, require('./' + process.env.NODE_ENV + '.js') || {});
