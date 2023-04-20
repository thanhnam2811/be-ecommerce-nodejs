const mongoose = require('mongoose');
const os = require('os');

const countConnect = () => {
	const numConnection = mongoose.connections.length;
	console.log(`🔌 Number of connections: ${numConnection}`);
};

const _INTERVAL = 5000;
const MAX_CONNECTION_PER_CORE = 10;
const checkOverload = () => {
	setInterval(() => {
		const numConnection = mongoose.connections.length;
		const numberCore = os.cpus().length;
		const memoryUsage = process.memoryUsage().rss;
		const memoryUsageMB = (memoryUsage / 1024 / 1024).toFixed(2);

		const maxConnection = numberCore * MAX_CONNECTION_PER_CORE;
		console.log(`🔗 Connections: ${numConnection}/${maxConnection} - 📊 Memory usage: ${memoryUsageMB} MB`);
		if (numConnection >= maxConnection) {
			console.log('⚠️⚠️⚠️ Connection overload detected!');
		}
	}, _INTERVAL);
};

module.exports = { countConnect, checkOverload };
