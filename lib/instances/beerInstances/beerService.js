const BeerService = require('../../services/BeerService');

const { DEBUG } = require('../../../env');

module.exports = new BeerService({
  // beerValidator: require('./beerValidator'),
  beerRepository: require('./beerRepository'),
  logError: DEBUG ? console.error : undefined // eslint-disable-line no-console
});
