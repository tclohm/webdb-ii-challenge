const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.send('<h1>Hooked in</h1>');
});

function logger(req, res, next, err) {
	console.log(`${req.method} request`);
	console.log(`${res.statusCode} returned`);
	console.log(`Err: ${err}`)
}

server.use('/api/cars', logger, carsRouter);

module.exports = server;