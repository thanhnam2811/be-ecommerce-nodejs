import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// init middleware
app.use(morgan('dev')); // log requests
app.use(helmet()); // hide server info
app.use(compression()); // compress responses for faster loading

// init db

// init routes
app.get('/', (req, res) => {
	res.send('👋 Hello from the E-Commerce API');
});

// handle errors

export default app;
