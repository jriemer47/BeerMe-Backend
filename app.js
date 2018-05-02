const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const cors = require('cors');

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const beerRoutes = require('./src/routes/beer.js');

app.use('/beerme', beerRoutes);

app.use((error, req, res, next) => {
  res.status(error.status).json(error);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`The beer is cold on port ${port}!`);
  });
}

module.exports = app;
