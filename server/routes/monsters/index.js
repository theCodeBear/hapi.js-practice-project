"use strict";

var Monster = require('../../models/monsters');

module.exports = {
  handler: function(request, reply) {
    Monster.find(function(err, monsters) {
      console.log(monsters);
      reply.view('templates/monsters/index', {monsters: monsters});
    });
  }
};
