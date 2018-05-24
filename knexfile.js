const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = require('./env');

module.exports = {
  [process.env.NODE_ENV]: {
    client: 'postgres',
    connection: {
      host: PGHOST,
      database: PGDATABASE
    },
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  }
};
