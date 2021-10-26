const logger = require('../api/platform/logger');
const currencyConverter = require('../api/currencyConverter/currencyClient');

async function routeHandler(req, res) {
    logger.info('[oeAssignment9Jefin] Sending converted Value!');
    let a = new currencyConverter;
    // a.convertCurrency(200, "USD", "EUR")
    a.convertCurrency(req.body.amount, req.body.fromCurrency.name, req.body.toCurrency.name)
        .then(
            (data) => {
                logger.info(data);
                res.status(200).json({ convertedCurrency: { amount: data, symbol: req.body.toCurrency.symbol } });
            }
        )
        .catch(err => console.log(err));
}

module.exports = routeHandler;
