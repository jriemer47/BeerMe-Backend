require('dotenv').load();
const chai = require('chai');
const expect = chai.expect;
const users = require('../lib/instances/userInstances/userService');
const beers = require('../lib/instances/beerInstances/beerService');
const breweries = require('../lib/instances/breweryInstances/breweryService');
const config = require('../knexfile').test;
chai.use(require('chai-as-promised'));

describe('Beer Me', function() {
  before(function() {
    const tmpConnection = require('knex')({
      client: 'pg',
      connection: config.connection
    });
    return tmpConnection
      .raw(`CREATE DATABASE ${config.connection.database};`)
      .catch(err => {
        Promise.resolve('Everything is OK');
      })
      .then(() => (global.knex = require('../db')))
      .then(() => knex.migrate.rollback())
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`));
  });

  describe('#getAll()', function() {
    it('should return a list of all the users in the database', function() {
      return users.getAll().then(result => {
        expect(result.length).to.equal(6);

        const user = result[0];
        expect(user.id).to.be.ok;
        expect(user.first_name).to.be.ok;
      });
    });
  });

  describe('#getAll()', function() {
    it('should return a list of all the beers in the database', function() {
      return beers.getAll().then(result => {
        expect(result.length).to.equal(30);

        const beer = result[0];
        expect(beer.id).to.be.ok;
        expect(beer.beer_name).to.be.ok;
      });
    });
  });

  describe('#getAll()', function() {
    it('should return a list of all the breweries in the database', function() {
      return breweries.getAll().then(result => {
        expect(result.length).to.equal(11);

        const brewery = result[0];
        expect(brewery.id).to.be.ok;
        expect(brewery.brewery_name).to.be.ok;
      });
    });
  });

  describe('#getUsersFavoriteBeers()', function() {
    it('should return a list of all the users favorite beers', function() {
      return users.getUsersFavoriteBeers(1).then(result => {
        expect(result.length).to.equal(4);

        const userBeers = result[0];
        expect(userBeers.beer_name).to.be.ok;
        expect(userBeers.id).to.be.ok;
      });
    });
  });

  describe('#getBeersFromBrewery()', function() {
    it('should return a list of all the users favorite beers', function() {
      return breweries.getBeersFromBrewery(1).then(result => {
        expect(result.length).to.equal(3);

        const breweryBeers = result[0];
        expect(breweryBeers.beer_name).to.be.ok;
        expect(breweryBeers.brewery_name).to.be.ok;
      });
    });
  });
});
