const EntityController = require('../../controllers/EntityController');

module.exports = new EntityController({
  entityName: 'beer',
  entityService: require('./beerService')
});
