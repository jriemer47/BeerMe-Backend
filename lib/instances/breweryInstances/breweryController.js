const EntityController = require('../../controllers/EntityController');

module.exports = new EntityController({
  entityName: 'brewery',
  entityService: require('./breweryService')
});
