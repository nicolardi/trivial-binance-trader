const Binance = require('node-binance-api')
const fs = require('fs');
require('dotenv').config();


function writePrice(filename, symbol, price) {
    // get current iso date
    const date = new Date().toISOString();
    // test if file exists synchronously

    if (false === fs.existsSync(filename)) {
        // create file if not exists
        fs.writeFileSync(filename, ``);
    }

    const data = fs.readFileSync(filename)
    const fd = fs.openSync(filename, 'w+')
    const insert = Buffer.from(`${date}, ${price[symbol]}\n`)
    fs.writeSync(fd, insert, 0, insert.length, 0)
    fs.writeSync(fd, data, 0, data.length, insert.length)
    fs.closeSync(fd);
}


const binance = new Binance().options({
    APIKEY: process.env.APIKEY,
    APISECRET: process.env.APISECRET,
    useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
});

// Bitcoin
const symbol = 'BTCUSDT';

async function run() {

    async function saveSymbolPrice(symbol) {
        const price = await binance.prices(symbol);

        // write price to file synchronously prepend mode
        const filename = `data/prices/${symbol}.csv`;
        writePrice(filename, symbol, price);
    }

    
    saveSymbolPrice(symbol);

    /*
     binance.balance((error, balances) => {
         if (error) return console.error(error);
         console.info("balances()", balances);
         console.info("ETH balance: ", balances.EUR.available);
     });
     */

}

run();

//console.info(await binance.futuresPrices());
