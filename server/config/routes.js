// config value is the code to run when hapi routes to that path, takes an object
module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},   // '/{param*]' is a GET to /anything
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/about', config: require('../routes/general/about')},
  {method: 'get', path: '/faq', config: require('../routes/general/faq')},
  {method: 'get', path: '/contact', config: require('../routes/general/contact')},

  {method: 'get', path: '/sum/{x}/{y}', config: require('../routes/math/sum')},
  {method: 'get', path: '/squares/{nums}', config: require('../routes/math/squares')},

  {method: 'get', path: '/monsters', config: require('../routes/monsters/index')}
];
