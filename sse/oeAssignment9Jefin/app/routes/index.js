module.exports = async app => {
  app.post('/v1/currencyConverter', require('./currency'));
};
