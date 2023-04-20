const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const { checkOverload } = require('./helpers/check-connect');

const app = express();

// init middleware
app.use(morgan('dev')); // log requests
app.use(helmet()); // hide server info
app.use(compression()); // compress responses for faster loading

// init db
require('./dbs/mongo.db');
checkOverload();

// init routes
app.get('/', (req, res) => {
	res.send('👋 Hello from the E-Commerce API');
});

// handle errors

// export app
module.exports = app;
