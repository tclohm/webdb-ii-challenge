const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router.js');

const server = express();

server.use(express.json());

function logger(req, res, next, err) {
	console.log(`${req.method} request`);
	console.log(`${res.status} returned`);
	console.log(`Err: ${err}`)
}

server.use(logger);

server.get('/', (req, res) => {
	res.send('<h1>Hooked in</h1>');
});

server.use('/api/cars', carsRouter);

module.exports = server;