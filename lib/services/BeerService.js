const bcrypt = require('bcryptjs');

const { omit, pick } = require('../utils/ObjectUtils');
const { isFunction } = require('../utils/LangUtils');
const { noop } = require('../utils/FunctionUtils');

class BeerService {
  constructor({ beerValidator, beerRepository, logError }) {
    this._beerValidator = beerValidator;
    this._beerRepository = beerRepository;
    this._logError = isFunction(logError) ? logError : noop;
  }

  async getAll() {
    const beers = await this._beerRepository.getAll();
    return beers;
  }

  async getById(id) {
    const beer = await this._beerRepository.getById(id);
    if (!beer) throw this._createNotFoundError();
    return beer;
  }

  async createBeer(id, attributes) {
    try {
      console.log(attributes);

      const beer = await this._beerRepository.createBeer(id, attributes);
      return beer;
    } catch (error) {
      this._logError(error);
      if (error.message.endsWith('Validator.ERROR_INVALID_INPUT')) {
        throw this._createInvalidInputError();
      }
      throw this._createUnexpectedError();
    }
  }

  // async update(id, attributes, authentication) {
  //   try {
  //     const authenticatedUser = await this._getAuthenticatedUser(
  //       authentication
  //     );
  //     if (!authenticatedUser) throw this._createPermissionDeniedError();
  //     if (
  //       authenticatedUser.id !== id &&
  //       authenticatedUser.role !== 'ROLE_ADMIN'
  //     ) {
  //       throw this._createPermissionDeniedError();
  //     }
  //     attributes = await this._beerValidator.validate(attributes, 'forUpdate');
  //     const user = await this._beerRepository.update(id, attributes);
  //     if (!user) throw this._createNotFoundError();
  //     return user;
  //   } catch (error) {
  //     this._logError(error);
  //     if (error.message.startsWith(BeerService.name)) throw error;
  //     throw this._createUnexpectedError();
  //   }
  // }

  _createUnexpectedError() {
    return new Error(BeerService.ERROR_UNEXPECTED);
  }

  _createNotFoundError() {
    return new Error(BeerService.ERROR_NOT_FOUND);
  }

  _createInvalidInputError() {
    return new Error(BeerService.ERROR_INVALID_INPUT);
  }

  _createPermissionDeniedError() {
    return new Error(BeerService.ERROR_PERMISSION_DENIED);
  }
}

BeerService.ERROR_UNEXPECTED = 'BeerService.ERROR_UNEXPECTED';
BeerService.ERROR_NOT_FOUND = 'BeerService.ERROR_NOT_FOUND';
BeerService.ERROR_INVALID_INPUT = 'BeerService.ERROR_INVALID_INPUT';
BeerService.ERROR_PERMISSION_DENIED = 'BeerService.ERROR_PERMISSION_DENIED';

module.exports = BeerService;
