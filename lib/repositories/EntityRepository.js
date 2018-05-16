const { isFunction } = require('../utils/LangUtils');
const { noop } = require('../utils/FunctionUtils');

class EntityRepository {
  constructor({ entityName, db, logError }) {
    this._entityName = entityName;
    this._db = db;
    this._logError = isFunction(logError) ? logError : noop;
  }

  async getAll() {
    try {
      const records = await this._db(this._entityName);
      // console.log(records);
      return records;
    } catch (error) {
      this._logError(error);
      throw this._createUnexpectedError();
    }
  }

  async create(attributes) {
    try {
      const [record] = await this._db(this._entityName)
        .insert(attributes)
        .returning('*');
      return record;
    } catch (error) {
      this._logError(error);
      throw this._createInvalidInputError();
    }
  }

  async getById(id) {
    try {
      const [record] = await this._db(this._entityName).where({ id });
      console.log(record);
      return record;
    } catch (error) {
      this._logError(error);
      throw this._createUnexpectedError();
    }
  }

  async findByAttribute(attributeName, attributeValue) {
    try {
      const records = await this._db(this._entityName).where(
        attributeName,
        attributeValue
      );
      return records;
    } catch (error) {
      this._logError(error);
      throw this._createUnexpectedError();
    }
  }

  async update(id, attributes) {
    try {
      const [record] = await this._db(this._entityName)
        .update(attributes)
        .returning('*')
        .where({ id });
      return record;
    } catch (error) {
      this._logError(error);
      throw this._createUnexpectedError();
    }
  }

  async delete(id) {
    try {
      const [record] = await this._db(this._entityName)
        .delete()
        .returning('*')
        .where({ id });
      return record;
    } catch (error) {
      this._logError(error);
      throw this._createUnexpectedError();
    }
  }
  async getUsersFavoriteBeers(id) {
    return db('beer_brewery')
      .join('beer', 'beer.id', 'beer_brewery.beer_id')
      .join('brewery', 'brewery.id', 'beer_brewery.brewery_id')
      .join('favorite_beers', 'beer.id', 'favorite_beers.beer_id')
      .join('user', 'user.id', 'favorite_beers.user_id')
      .where('favorite_beers.user_id', id)
      .select(
        'user.name',
        'beer.beer_name',
        'brewery.brewery_name',
        'beer.style',
        'beer.abv',
        'beer.ibu'
      )
      .then(result => {
        return result;
      });
  }

  async getBeersFromBrewery(id) {
    return db('beer_brewery')
      .join('beer', 'beer.id', 'beer_brewery.beer_id')
      .join('brewery', 'beer_brewery.brewery_id', 'brewery.id')
      .where('brewery.id', id)
      .select('beer_id', 'beer.beer_name', 'brewery_id', 'brewery.brewery_name')
      .then(result => {
        return result;
      });
  }

  _createUnexpectedError() {
    throw new Error(
      EntityRepository.ERROR_UNEXPECTED.replace('Entity', this._entityName)
    );
  }

  _createInvalidInputError() {
    return new Error(
      EntityRepository.ERROR_INVALID_INPUT.replace('Entity', this._entityName)
    );
  }
}

EntityRepository.ERROR_INVALID_INPUT = 'EntityRepository.ERROR_INVALID_INPUT';
EntityRepository.ERROR_UNEXPECTED = 'EntityRepository.ERROR_UNEXPECTED';

module.exports = EntityRepository;
