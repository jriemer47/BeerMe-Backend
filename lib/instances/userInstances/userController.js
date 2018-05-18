// console.log('do we get to uderController????');
const EntityController = require('../../controllers/EntityController');

module.exports = new EntityController({
  entityName: 'user',
  entityService: require('./userService')
});
