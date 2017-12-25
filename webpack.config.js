module.exports = process.env.NODE_ENV === 'production' ? require('./webpack_config_production.js') : require('./webpack_config_development.js');
