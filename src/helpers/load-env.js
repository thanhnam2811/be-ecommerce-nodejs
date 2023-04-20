const { config } = require('dotenv');

const envPaths = {
	PROD: '.env.prod',
	TEST: '.env.test',
	DEV: '.env.dev',
};

const loadENV = () => {
	const env = process.env.NODE_ENV; // get the env
	let envPath = envPaths[env]; // get the path of the env file

	envPath ??= envPaths.DEV; // if the env is not found, use the dev env

	// load the env file
	config({ path: envPath });
};

module.exports = loadENV;
