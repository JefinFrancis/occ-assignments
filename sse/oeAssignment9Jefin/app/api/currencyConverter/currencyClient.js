const { createHttpClient, HttpClientError } = require('../platform/httpClient');
const keys = require('../../../config/default.json');
const axios = require('axios');

class CurrencyConverter {
    constructor() {
        this._client = createHttpClient({
            baseURL: "https://free.currconv.com"
        })
    }
    async convertCurrency(amount, fromCurrency, toCurrency) {
        // try {
            const query = fromCurrency + '_' + toCurrency;
            let convertedAmount = 0;
            let data = await axios.get(`https://v1.nocodeapi.com/qcwwq/cx/twFuMknTbtNmdXnI/rates/convert?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
                // let data = await axios.get(`https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${keys.keys['apiKey']}`)
                .then(data => {
                    convertedAmount = data.data.result.toFixed(2);
                    return convertedAmount;
                })
                .catch(e => { throw new HttpClientError(`${e.message}`, e.response) });
            return data;
        // } catch (e) {
        //     throw new HttpClientError(`${e.message}`, e.response);
        // }
    }
}

module.exports = CurrencyConverter;
