const healthChecker = (req, res) => {
  const { error } = req.query;
  if (error === 'true') {
    throw new Error('error sent!!!');
  } else {
    res.send('Hello World!');
  }
};

const syncError = (req, res) => {
  throw new Error('SYNC ERROR');
};

const asyncError = async (req, res, next) => {
  throw new Error('ASYNC ERROR');
};

module.exports = {
  healthChecker,
  syncError,
  asyncError,
};
