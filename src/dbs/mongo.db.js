const mongoose = require('mongoose');
const { countConnect } = require('../helpers/check-connect');

const { host, port, database } = require('../configs/mongo.config');
const connectionStr = `mongodb://${host}:${port}/${database}`;

class Database {
	constructor() {
		this._connect();
	}

	_connect() {
		// Set debug mode if not in production
		if (process.env.NODE_ENV !== 'production') {
			mongoose.set('debug', true);
			mongoose.set('debug', { color: true });
		}

		console.log('⏳ Connecting to database...');
		mongoose
			.connect(connectionStr)
			.then(() => {
				console.log('✅ Database connection successful');
				countConnect();
			})
			.catch((err) => {
				console.error('❌ Database connection error', err);
			});
	}

	// Singleton pattern
	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;
