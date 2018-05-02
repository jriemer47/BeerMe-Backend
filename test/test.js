require('dotenv').load();
const chai = require('chai');
const expect = chai.expect;
const beer = require('../src/models/beer');
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
        //console.log(err);
        Promise.resolve('Everything is OK');
      })
      .then(() => (global.knex = require('../db')))
      .then(() => knex.migrate.rollback())
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`));
  });

  describe('#getAllUsers()', function() {
    it('should return a list of all the users in the database', function() {
      return beer.getAllUsers().then(result => {
        expect(result.length).to.equal(6);

        const user = result[0];
        expect(user.id).to.be.ok;
        expect(user.name).to.be.ok;
      });
    });
  });

  describe('#getAllBeers()', function() {
    it('should return a list of all the beers in the database', function() {
      return beer.getAllBeers().then(result => {
        expect(result.length).to.equal(6);

        const beer = result[0];
        expect(beer.id).to.be.ok;
        expect(beer.beer_name).to.be.ok;
      });
    });
  });

  describe('#getAllBreweries()', function() {
    it('should return a list of all the breweries in the database', function() {
      return beer.getAllBreweries().then(result => {
        expect(result.length).to.equal(6);

        const brewery = result[0];
        expect(brewery.id).to.be.ok;
        expect(brewery.brewery_name).to.be.ok;
      });
    });
  });

  describe('#getUsersFavoriteBeers()', function() {
    it('should return a list of all the users favorite beers', function() {
      return beer.getUsersFavoriteBeers(1).then(result => {
        expect(result.length).to.equal(4);

        const beers = result[0];
        expect(beers.beer_name).to.be.ok;
        expect(beers.name).to.be.ok;
      });
    });
  });

  describe('#getBeersFromBrewery()', function() {
    it('should return a list of all the users favorite beers', function() {
      return beer.getBeersFromBrewery(1).then(result => {
        expect(result.length).to.equal(1);

        const beers = result[0];
        expect(beers.beer_name).to.be.ok;
        expect(beers.brewery_name).to.be.ok;
      });
    });
  });
});
