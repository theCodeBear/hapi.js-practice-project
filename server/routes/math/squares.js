"use strict";

var Joi = require('joi');

module.exports = {
  // validate: {
  //   params: {
  //     x: 
  //   }
  // }
  handler: function(request, reply) {
    var numsArray = request.params.nums.split(",");
    var ansArray = numsArray.map(function(e) { return e*e;});
    reply.view('templates/math/squares', {nums: numsArray, ans: ansArray});
  }
}