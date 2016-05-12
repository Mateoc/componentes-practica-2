/**
 * Main application routes
 */
'use strict';

var errors = require('./components/errors');

module.exports = function (app) {

    // Insert routes below
    app.use('/api/v1/auth', require('./api/auth'));
    app.use('/api/v1/user', require('./api/user'));
    //  app.use('/api/v1/user', require('./api/user'));


    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets|fonts)/*')
    .get(errors[404]);
};
