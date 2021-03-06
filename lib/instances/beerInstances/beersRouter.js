const express = require('express');
const Boom = require('boom');
const router = express.Router();

const beerController = require('./beerController');

// router.all('/beers', (request, response, next) =>
//   next(Boom.methodNotAllowed(null, null, ['OPTIONS', 'POST']))
// );

router.get('/beers', beerController.getAll);
router.get('/beers/:id', beerController.getById);
router.post('/beers/:id', beerController.createBeer);

// router.get('/beers/:id(\\d+)', beerController.getById);
// router.patch('/beers/:id(\\d+)', beerController.update);
// router.all('/beers', (request, response, next) =>
//   next(Boom.methodNotAllowed(null, null, ['OPTIONS', 'GET', 'PATCH']))
// );

module.exports = router;
