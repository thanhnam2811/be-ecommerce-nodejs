import app from './src/app.js';

// Get the port from the environment variable or use 3745 as default
const PORT = process.env.PORT || 3745;

// Start the server
const server = app.listen(PORT, () => {
	console.log(`🚀 E-COMMERCE API listening on port ${PORT}`);
});

// Listen for SIGINT signal (Ctrl+C)
process.on('SIGINT', () => {
	console.log('👋 SIGINT RECEIVED. Shutting down gracefully');
	server.close(() => {
		console.log('💥 Process terminated!');
	});
});
