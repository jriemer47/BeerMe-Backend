const bcrypt = require('bcryptjs');

const { omit, pick } = require('../utils/ObjectUtils');
const { isFunction } = require('../utils/LangUtils');
const { noop } = require('../utils/FunctionUtils');

class UserService {
  constructor({ userValidator, userRepository, logError }) {
    // this._userValidator = userValidator;
    this._userRepository = userRepository;
    this._logError = isFunction(logError) ? logError : noop;
  }

  async getAll() {
    const users = await this._userRepository.getAll();
    return users;
  }

  async create(attributes) {
    try {
      let { newUser } = attributes;
      // console.log('attttssstt', newUser.password);
      // newUser = await this._userValidator.validate(newUser, 'forCreate');
      const hashedPassword = await bcrypt.hash(newUser.password, 10);
      delete newUser.password;
      newUser.hashedPassword = hashedPassword;
      const user = await this._userRepository.create(newUser);
      return omit(user, 'hashedPassword');
      return user;
    } catch (error) {
      this._logError(error);
      if (error.message.endsWith('Validator.ERROR_INVALID_INPUT')) {
        throw this._createInvalidInputError();
      }
      throw this._createUnexpectedError();
    }
  }

  async getById(id, authentication) {
    try {
      const authenticatedUser = await this._getAuthenticatedUser(
        authentication
      );
      console.log('authenticatedUser', authenticatedUser);
      const user = await this._userRepository.getById(id);
      console.log(user, 'userrrrrr');
      if (!user) throw this._createNotFoundError();
      if (
        authenticatedUser &&
        (authenticatedUser.role === 'ROLE_ADMIN' || authenticatedUser.id === id)
      ) {
        return omit(user, 'hashedPassword');
      }
      return pick(user, ['id', 'name', 'email', 'location']);
    } catch (error) {
      this._logError(error);
      if (error.message.startsWith(UserService.name)) throw error;
      throw this._createUnexpectedError();
    }
  }

  async getUsersFavoriteBeers(id) {
    const beers = await this._userRepository.getUsersFavoriteBeers(id);
    if (!beers) throw this._createNotFoundError();
    return beers;
  }

  /////////////////////////////////////////////////////////////
  async addFavoriteBeer(user_id, beer_id) {
    console.log('hellloooooo from UserService');
    const beers = await this._userRepository.addFavoriteBeer(user_id, beer_id);
    console.log('beers!!', beers);
    if (!beers) throw this._createNotFoundError();
    return beers;
  }
  /////////////////////////////////////////////////////////////
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
  //     attributes = await this._userValidator.validate(attributes, 'forUpdate');
  //     const user = await this._userRepository.update(id, attributes);
  //     if (!user) throw this._createNotFoundError();
  //     return user;
  //   } catch (error) {
  //     this._logError(error);
  //     if (error.message.startsWith(UserService.name)) throw error;
  //     throw this._createUnexpectedError();
  //   }
  // }

  async _getAuthenticatedUser(authentication) {
    console.log(authentication);
    const { userId: authenticatedUserId } = authentication;
    if (!Number.isFinite(authenticatedUserId)) return null;
    const authenticatedUser = await this._userRepository.getById(
      authenticatedUserId
    );
    return omit(authenticatedUser, 'hashedPassword');
  }

  _createUnexpectedError() {
    return new Error(UserService.ERROR_UNEXPECTED);
  }

  _createNotFoundError() {
    return new Error(UserService.ERROR_NOT_FOUND);
  }

  _createInvalidInputError() {
    return new Error(UserService.ERROR_INVALID_INPUT);
  }

  _createPermissionDeniedError() {
    return new Error(UserService.ERROR_PERMISSION_DENIED);
  }
}

UserService.ERROR_UNEXPECTED = 'UserService.ERROR_UNEXPECTED';
UserService.ERROR_NOT_FOUND = 'UserService.ERROR_NOT_FOUND';
UserService.ERROR_INVALID_INPUT = 'UserService.ERROR_INVALID_INPUT';
UserService.ERROR_PERMISSION_DENIED = 'UserService.ERROR_PERMISSION_DENIED';

module.exports = UserService;
