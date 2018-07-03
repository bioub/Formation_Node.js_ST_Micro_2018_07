const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const contactRouter = require('./api/contact');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

const app = express();

if (!config.production) {
  app.use(morgan('dev'));
}

app.use('/api/contacts', contactRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
