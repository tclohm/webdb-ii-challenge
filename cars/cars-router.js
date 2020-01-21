const express = require('express');
const knex = require('knex');
const config = require('../knexfile.js'); 
const db = knex(config.development);

const router = express.Router();

router.get('/', (req, res) => {
	db('cars')
		.then(cars => {
			res.json(cars)
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to retrieve cars' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	db('cars').where({ id }).first()
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
		.then(identifier => {
			// grabbing id
			db('cars').where({ id: identifier[0] })
			.then(newCar => {
				res.status(201).json(newCar);
			});
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to post data' });
		});
});

router.put('/:id', (req, res) => {
	const payload = {
		VIN: req.body.VIN, 
		make: req.body.make, 
		model: req.body.model, 
		mileage: req.body.mileage, 
		transmissionType: req.body.transmissionType, 
		status: req.body.status
	}
	db('cars').where("id", req.params.id).update(payload)
		.then(identifier => {
			res.status(201).json(db('cars').where({ id: identifier[0] }));
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to replace data' });
		});
});

router.delete('/:id', (req, res) => {
	db('cars').where({ id: req.params.id }).del()
		.then(identifier => {
			res.status(204).json({ message: "Deleted car" });
		})
		.catch(err => {
			res.status(500).json({ message: "Error deleted car" });
		});
});

module.exports = router;