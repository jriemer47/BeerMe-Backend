const bcrypt = require('bcryptjs');

// const { omit, pick } = require('../utils/ObjectUtils');
const { isFunction } = require('../utils/LangUtils');
const { noop } = require('../utils/FunctionUtils');

class BreweryService {
  constructor({ breweryValidator, breweryRepository, logError }) {
    this._breweryValidator = breweryValidator;
    this._breweryRepository = breweryRepository;
    this._logError = isFunction(logError) ? logError : noop;
  }

  async getAll() {
    const breweries = await this._breweryRepository.getAll();
    return breweries;
  }

  async getById(id) {
    const brewery = await this._breweryRepository.getById(id);
    if (!brewery) throw this._createNotFoundError();
    return brewery;
  }
  /////////////////////////////////////////////////////////////////
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

BreweryService.ERROR_UNEXPECTED = 'BreweryService.ERROR_UNEXPECTED';
BreweryService.ERROR_NOT_FOUND = 'BreweryService.ERROR_NOT_FOUND';
BreweryService.ERROR_INVALID_INPUT = 'BreweryService.ERROR_INVALID_INPUT';
BreweryService.ERROR_PERMISSION_DENIED =
  'BreweryService.ERROR_PERMISSION_DENIED';

module.exports = BreweryService;
