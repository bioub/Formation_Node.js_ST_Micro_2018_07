const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');
const contactRouter = require('./api/contact');
const societeRouter = require('./api/societe');
const todoRouter = require('./api/todo');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

const app = express();

if (!config.production) {
  app.use(morgan('dev'));
}

// Permet les requetes cross-domain
// en définissant un en-tete Access-Control-Allow-Origin: *
app.use(cors());
/*
app.use((req, res, next) => {
  if (['localhost:9000', 'st.com'].includes(req.headers.origin)) {
    res.setHeader('Access-control-allow-origin', req.headers.origin);
  }
  next();
})
*/

// app.use('/api', auth);

app.use('/api/contacts', contactRouter);
app.use('/api/societes', societeRouter);
app.use('/api/todos', todoRouter);

app.use('/api', notFound);
app.use(/*'/', */(req, res, next) => {
  res.statusCode = 404;
  res.send('<h2>Not Found</h2>');
});
app.use(errorHandler);

module.exports = app;
