const loadENV = require('../helpers/load-env');

// load environment variables
loadENV();

const mongoConfig = {
	host: process.env.MONGODB_HOST,
	port: process.env.MONGODB_PORT,
	database: process.env.MONGODB_DATABASE,
};

module.exports = mongoConfig;
