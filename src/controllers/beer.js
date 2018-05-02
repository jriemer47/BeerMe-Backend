const model = require('../models/beer');

// ===============================================
// PROCESS USER DATA MODELS TO READ/SHOW
// ===============================================

getAllUsers = (req, res, next) => {
  let promise = model.getAllUsers(req.query.limit);

  promise.then(users => {
    res.status(200).json({
      users,
      message: 'all users returned succesfully'
    });
  });

  promise.catch(error => {
    next(error);
  });
};

getAllBeers = (req, res, next) => {
  let promise = model.getAllBeers(req.query.limit);

  promise.then(beers => {
    res.status(200).json({
      beers,
      message: 'all beers returned succesfully'
    });
  });

  promise.catch(error => {
    next(error);
  });
};

getAllBreweries = (req, res, next) => {
  let promise = model.getAllBreweries(req.query.limit);

  promise.then(breweries => {
    res.status(200).json({
      breweries,
      message: 'all breweries returned succesfully'
    });
  });

  promise.catch(error => {
    next(error);
  });
};

getUsersFavoriteBeers = (req, res, next) => {
  let promise = model.getUsersFavoriteBeers(req.params.id);

  promise.then(beers => {
    res.status(200).json({
      beers,
      message: `all of user ${
        req.params.id
      } favorite beers returned succesfully`
    });
  });

  promise.catch(error => {
    next(error);
  });
};

getBeersFromBrewery = (req, res, next) => {
  let promise = model.getBeersFromBrewery(req.params.id);

  promise.then(beers => {
    res.status(200).json({
      beers,
      message: `all of brewery ${req.params.id}'s beers returned succesfully`
    });
  });

  promise.catch(error => {
    next(error);
  });
};

module.exports = {
  getAllUsers,
  getAllBeers,
  getAllBreweries,
  getUsersFavoriteBeers,
  getBeersFromBrewery
};
