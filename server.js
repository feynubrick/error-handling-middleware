const express = require('express');
require('express-async-errors');
const { healthChecker, syncError, asyncError } = require('./controllers');
const app = express();
const port = 3000;

const errorlogger = (err, req, res, next) => {
  console.log('REQ path:', req.path);
  console.log('REQ method:', req.method);
  console.log('REQ query:', req.query);
  console.error('syoh', err.stack);
  next(err);
};

const errorResponser = (err, req, res, next) => {
  res.status(500).send({ message: err.message });
};

app.get('/', healthChecker);
app.get('/sync-error', syncError);
app.get('/async-error', asyncError);
app.use(errorlogger);
app.use(errorResponser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
