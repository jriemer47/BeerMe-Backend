const BreweryService = require('../../services/BreweryService');

const { DEBUG } = require('../../../env');

module.exports = new BreweryService({
  breweryRepository: require('./breweryRepository'),
  logError: DEBUG ? console.error : undefined
});
