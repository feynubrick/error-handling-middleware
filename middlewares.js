const errorLogger = (err, req, res, next) => {
  console.log('REQ path:', req.path);
  console.log('REQ method:', req.method);
  console.log('REQ query:', req.query);
  console.error('syoh', err.stack);
  next(err);
};

const errorResponser = (err, req, res, next) => {
  res.status(500).send({ message: err.message });
};

const requestLogger = (req, res, next) => {
  console.log(`REQUEST ${req.method} ${req.originalUrl}`);
  console.log('        query:', req.query);
  console.log('        body:', req.body);
  next();
};

module.exports = {
  errorLogger,
  errorResponser,
  requestLogger,
};
