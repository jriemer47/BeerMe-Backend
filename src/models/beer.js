const db = require('../../db');
const uuid = require('uuid/v4');

// ===============================================
// MANAGE USER DATA
// ===============================================

getAllUsers = () => {
  return db('user').then(users => {
    return users;
  });
};

getAllBeers = () => {
  return db('beer').then(beers => {
    return beers;
  });
};

getAllBreweries = () => {
  return db('brewery').then(breweries => {
    return breweries;
  });
};

getUsersFavoriteBeers = id => {
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
};

getBeersFromBrewery = id => {
  return db('beer_brewery')
    .join('beer', 'beer.id', 'beer_brewery.beer_id')
    .join('brewery', 'beer_brewery.brewery_id', 'brewery.id')
    .where('brewery.id', id)
    .select('beer_id', 'beer.beer_name', 'brewery_id', 'brewery.brewery_name')
    .then(result => {
      return result;
    });
};

module.exports = {
  getAllUsers,
  getAllBeers,
  getAllBreweries,
  getUsersFavoriteBeers,
  getBeersFromBrewery
};
