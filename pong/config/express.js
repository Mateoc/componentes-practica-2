/**
 * Express configuration
 */

'use strict';

var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./environment');

module.exports = function (app) {
    var env = app.get('env');

    app.set('views', config.root + '/app');
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());

    if ('production' === env) {
        app.use(express.static(path.join(config.root, '/app')));
        app.set('appPath', config.root + '/app');
        app.set('renderPath', config.root + '/app');
    }

    if ('stage' === env) {
        app.use(express.static(path.join(config.root, '/public')));
        app.set('appPath', config.root + '/public');
        app.set('renderPath', config.root + '/public');
    }


    if ('development' === env || 'test' === env) {
        app.set('appPath', 'app');
        app.set('renderPath', 'app');
        app.use(errorHandler()); // Error handler - has to be last
    }

    if ('development-server' === env) {
        app.set('appPath', 'app');
        app.set('renderPath', 'app');
        app.use(errorHandler()); // Error handler - has to be last
    }
};

