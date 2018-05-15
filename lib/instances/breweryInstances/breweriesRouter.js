const express = require('express');
const Boom = require('boom');
const router = express.Router();

const breweryController = require('./breweryController');

router.get('/breweries', breweryController.getAll);
router.get('/breweries/:id', breweryController.getById);

module.exports = router;
