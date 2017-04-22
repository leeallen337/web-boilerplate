module.exports = process.env.NODE_ENV === 'production'
  ? require('./webpack_config_production')
  : require('./webpack_config_development');
