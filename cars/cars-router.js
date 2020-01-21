const express = require('express');
const knex = require('knex');
const config = knex('../knexfile.js'); 
const db = knex(config.development);

const router = express.Router();

router.get('/', (req, res) => {
	db.('cars')
		.then(cars => {
			res.json(cars)
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to retrieve cars' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	db.('cars').where({ id }).first()
		.then(car => {
			res.json(car);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to retrieve single car' });
		});
});

router.post('/', (req, res) => {
	const car = req.body;
	db('cars').insert(car)
		.then(ids => {
			// grabbing id
			db('cars').where({ id: ids[0] })
			.then(newCar => {
				res.status(201).json(newCar);
			});
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to post data' });
		});
});

module.exports = router;