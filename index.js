const { JWT_KEY } = require('./env');

const express = require('express');
const bodyParser = require('body-parser');
const Boom = require('boom');
const cors = require('cors');
const jwt = require('express-jwt');
const UnauthorizedError = require('express-jwt/lib/errors/UnauthorizedError');

const server = express();

const beersRouter = require('./lib/instances/beerInstances/beersRouter');
const usersRouter = require('./lib/instances/userInstances/usersRouter');
const breweriesRouter = require('./lib/instances/breweryInstances/breweriesRouter');

// const favoritesRouter = require('./lib/instances/favoritesRouter');
// const ordersRouter = require('./lib/instances/ordersRouter');
const tokenRouter = require('./lib/instances/tokenInstances/tokenRouter');

server.use(bodyParser.json());
server.use(cors());
server.use(
  jwt({
    secret: JWT_KEY,
    requestProperty: 'jwt.payload',
    credentialsRequired: false,
    audiance: 'beerme',
    issuer: 'beerme'
  })
);
server.use((req, res, next) => {
  const authenticatedUserId = req.jwt ? req.jwt.payload.sub : undefined;
  req.authenticatedUserId =
    Number.isFinite(authenticatedUserId) && authenticatedUserId > 0
      ? authenticatedUserId
      : null;
  next();
});

server.use(express.static(__dirname + '/public'));
server.use(beersRouter);
server.use(usersRouter);
server.use(breweriesRouter);
// server.use(favoritesRouter);
// server.use(ordersRouter);
server.use(tokenRouter);

server.all('*', (req, res, next) => res.sendStatus(404));

server.use((err, req, res, next) => {
  console.log(err); // eslint-disable-line no-console
  if (err instanceof UnauthorizedError || err.typeof === Boom.unauthorized) {
    err = Boom.unauthorized(err.message, ['Bearer']);
  }
  if (!err.isBoom) err = Boom.badImplementation();
  res
    .set(err.output.headers)
    .status(err.output.statusCode)
    .json(err.output.payload);
});

const port =
  process.env.PORT && /^\d+$/.test(process.env.PORT)
    ? parseInt(process.env.PORT)
    : 8000;

server.listen(port, () => {
  if (process.env.NODE_ENV === 'test') return;
  console.log(`The beer is cold on port ${port}`); // eslint-disable-line no-console
});
