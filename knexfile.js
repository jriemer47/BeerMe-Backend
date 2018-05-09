// module.exports = {
//   development: {
//     client: 'pg',
//     connection: {
//       host: 'localhost',
//       database: 'beer_me'
//     },
//     migrations: {
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './db/seeds'
//     }
//   },
//   test: {
//     client: 'pg',
//     connection: {
//       host: 'localhost',
//       database: 'beer_me_test'
//     },
//     migrations: {
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './db/seeds'
//     }
//   }
// production: {
//   client: 'pg',
//   connection:
//     'postgres://bcydhneacicnse:69ccce18d8df7df3f71e8dd3c25b77144db173d3cd3e78ae8d9c7602f687f8a3@ec2-54-221-192-231.compute-1.amazonaws.com:5432/d5se2nbl8lp6me',
//   migrations: {
//     directory: './db/migrations'
//   },
//   seeds: {
//     directory: './db/seeds'
//   }
// }
// };
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = require('./env');

module.exports = {
  [process.env.NODE_ENV]: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'beer_me'
    },
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  }
};
