const express = require('express');
require('express-async-errors');
const { requestLogger, errorLogger, errorResponser } = require('./middlewares');
const { healthChecker, syncError, asyncError } = require('./controllers');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);
app.get('/', healthChecker);
app.get('/sync-error', syncError);
app.get('/async-error', asyncError);
app.use(errorLogger);
app.use(errorResponser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
