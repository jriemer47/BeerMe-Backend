const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/beer');

router.get('/users', ctrl.getAllUsers);

router.get('/beers', ctrl.getAllBeers);

router.get('/breweries', ctrl.getAllBreweries);

router.get('/users/:id/beers', ctrl.getUsersFavoriteBeers);

router.get('/beers/:id/breweries', ctrl.getBeersFromBrewery);

module.exports = router;
