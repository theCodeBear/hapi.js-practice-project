"use strict";

var Hapi = require('hapi');
var server = new Hapi.Server();
var plugins = require('./config/plugins');
var routes = require('./config/routes');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.once('open', function(callback) {
  server.views(require('./config/views'));
  server.connection({port:process.env.PORT});
  server.register(plugins, function() {
    server.route(routes);
    server.start(function() {
      console.log('info', server.info.uri);     // tells what uri it is serving on
      console.log('info', process.env.MONGO_URL);
    });
  });
});
