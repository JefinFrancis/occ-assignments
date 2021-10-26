# oeAssignment9Jefin Widget Status: ✅

# API CALL
curl --location --request POST 'https://asbx50c1dev-store.occa.ocs.oraclecloud.com/ccstorex/custom/v1/currencyConverter' \
--header 'Content-Type: application/json' \
--data-raw '{
    "amount": "90.00",
    "fromCurrency": {
        "name": "USD",
        "symbol": "$"
    },
    "toCurrency": {
        "name": "CAD",
        "symbol": "$"
    }
}'