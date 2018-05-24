const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = require('./env');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: PGHOST,
      database: PGDATABASE
    },
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  },
  production: {
    client: 'pg',
    connection:
      'postgres://utydjvlemokilt:2f9d604a8a94e825c9af5954eab449a948923a74d6c2a9cd1688e8d40ea0a607@ec2-54-243-235-153.compute-1.amazonaws.com:5432/d818hs6dt9k922',
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  }
};
