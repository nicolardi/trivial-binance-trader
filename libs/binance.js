const Binance = require('node-binance-api');

function binance() {
    return new Binance().options({
        APIKEY: process.env.APIKEY,
        APISECRET: process.env.APISECRET,
        useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
    });
}

exports.binance = binance;
