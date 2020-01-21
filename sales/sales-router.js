const express = require('express');
const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

const router = express.Router();

router.get('/', (req, res) => {
	db('sales')
		.then(sales => {
			res.status(200).json(sales)
		})
		.catch(err => {
			res.status(500).json({ message: "Error trying receiving sales data" });
		});
});

module.exports = router;