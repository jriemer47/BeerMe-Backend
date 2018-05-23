const Boom = require('boom');

class EntityController {
  constructor({ entityName, entityService }) {
    this._entityName = entityName;
    this._entityService = entityService;
    this._bindMethods([
      'getAll',
      'create',
      'getById',
      'update',
      'delete',
      'addFavoriteBeer',
      'getBeersFromBrewery',
      'getUsersFavoriteBeers',
      'createBeer'
    ]);
  }

  async getAll(req, res, next) {
    try {
      const entities = await this._entityService.getAll({
        userId: req.authenticatedUserId
      });
      // console.log('entities!!!!', entities);
      res.json(entities);
    } catch (error) {
      // console.log(error);
      next(this._convertError(error));
    }
  }

  async create(req, res, next) {
    try {
      const entity = await this._entityService.create(req.body, {
        userId: req.authenticatedUserId
      });
      res
        .status(201)
        .set('Location', '/token')
        .json(entity);
    } catch (error) {
      next(this._convertError(error));
    }
  }

  async getById(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      // console.log('iddddd', id);
      const entity = await this._entityService.getById(id, {
        userId: req.authenticatedUserId
      });
      // console.log(entity, 'entity');
      res.json(entity);
    } catch (error) {
      next(this._convertError(error));
    }
  }

  async update(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const entity = await this._entityService.update(id, req.body);
      res.json(entity);
    } catch (error) {
      next(this._convertError(error));
    }
  }

  async delete(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const entity = await this._entityService.delete(id, {
        userId: req.authenticatedUserId
      });
      res.json(entity);
    } catch (error) {
      next(this._convertError(error));
    }
  }
  ////////////////////////////////////////////////////////////////
  async addFavoriteBeer(req, res, next) {
    // console.log('hello from entitycontroller');
    try {
      // console.log('req.body', req.body);
      const user_id = parseInt(req.params.id);
      const beer_id = parseInt(req.body.beer_id);
      // console.log('userid', user_id);
      // console.log('beerId', beer_id);

      const entity = await this._entityService.addFavoriteBeer({
        user_id: user_id,
        beer_id: beer_id
      });
      // console.log('entity', entity);
      res
        .status(201)
        .set('Location', '/beers')
        .json(entity);
      // console.log('after res.json????');
    } catch (error) {
      next(this._convertError(error));
    }
  }

  //   async createForUser(req, res, next) {
  //     try {
  //       const userId = parseInt(req.params.userId);
  //       const user = await this._userService.getById(userId, {});
  //       const attributes = Object.assign({}, req.body, { userId: user.id });
  //       const favorite = await this._entityService.create(attributes);
  //       res.status(201).json(favorite);
  //     } catch (error) {
  //       next(this._convertError(error));
  //     }
  //   }
  // }
  //////////////////////////////////////////////////////////////////
  async getBeersFromBrewery(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      // console.log('do we get to the controller!!!???');
      const entity = await this._entityService.getBeersFromBrewery(id, {
        userId: req.authenticatedUserId
      });
      res.json(entity);
    } catch (error) {
      next(this._convertError(error));
    }
  }

  async getUsersFavoriteBeers(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const entity = await this._entityService.getUsersFavoriteBeers(id);
      res.json(entity);
    } catch (error) {
      next(this._convertError(error));
    }
  }

  async createBeer(req, res, next) {
    // console.log(req.params.id, 'req param createBeer');
    try {
      const brewery_id = parseInt(req.params.id);
      const entity = await this._entityService.createBeer(brewery_id, req.body);
      res.status(201).json(entity);
    } catch (error) {
      next(this._convertError(error));
    }
  }

  _bindMethods(methodNames) {
    methodNames.forEach(methodName => {
      this[methodName] = this[methodName].bind(this);
    });
  }

  _convertError(error) {
    if (error.message.endsWith('Service.ERROR_INVALID_INPUT')) {
      return Boom.badRequest(error.message);
    }
    if (error.message.endsWith('Service.ERROR_PERMISSION_DENIED')) {
      return Boom.forbidden(error.message);
    }
    if (error.message.endsWith('Service.ERROR_NOT_FOUND')) {
      return Boom.notFound(error.message);
    }
    if (error.message.endsWith('Service.ERROR_UNEXPECTED')) {
      return Boom.badImplementation(error.message);
    }
    return Boom.badImplementation();
  }
}

module.exports = EntityController;
