require('dotenv').config();

const { binance } = require("./libs/binance");
const { get_filename, get_filename_json,  write_data, read_file, write_file } = require("./libs/filesystem");
const { csv2json } = require("./libs/json");

// Bitcoin
const symbol = 'BTCUSDT';

async function run() {
    const filename = get_filename(symbol);
    const price = await binance().prices(symbol);
    const data = [new Date().toISOString(), price[symbol]];

    // Save data
    write_data(filename, data);

    // json
    const filename_json = get_filename_json(symbol);
    const log_contents = read_file(filename);
    const json = csv2json(log_contents);
    let ret = json.map((v) => {
        return {
            time:  new Date(v[0]).getTime(),
            value: v[1]
                
        };  
    });

    write_file(filename_json,  JSON.stringify(ret));
}

run();