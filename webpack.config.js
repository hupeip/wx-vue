if( process.env.NODE_ENV === 'production'){
	module.exports = require('./webpack.config.pro.js');
}else{
	module.exports = require('./webpack.config.dev.js');
}