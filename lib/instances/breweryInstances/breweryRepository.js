const EntityRepository = require('../../repositories/EntityRepository');

const { DEBUG } = require('../../../env');

module.exports = new EntityRepository({
  entityName: 'brewery',
  db: require('../defaultDatabase'),
  logError: DEBUG ? console.error : undefined
});
