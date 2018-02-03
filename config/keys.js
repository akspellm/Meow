if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  modult.exports = require('./dev');
};
