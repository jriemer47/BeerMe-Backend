const EntityController = require('../../controllers/EntityController');

module.exports = new EntityController({
  entityName: 'user',
  entityService: require('./userService')
});
