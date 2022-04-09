const fs = require('fs');

function write_data(filename, data) {
    create_file(filename);
    const data_text = data.join();
    prepend_file(filename, data_text);
   
}

function get_filename(symbol) {
    return `data/prices/${symbol}.csv`;
}

function get_filename_json(symbol) {
    return `data/prices/${symbol}.json`;
}

function read_file(filename) {
    return fs.readFileSync(filename).toString();
}

function write_file(filename, contents) {
    return fs.writeFileSync(filename, contents);
}


exports.write_data = write_data;
exports.get_filename = get_filename;
exports.get_filename_json = get_filename_json;
exports.read_file = read_file;
exports.write_file = write_file;

function prepend_file(filename, data_text) {
    const data = fs.readFileSync(filename)
    const fd = fs.openSync(filename, 'w+')
    const insert = Buffer.from(`${data_text}\n`)
    fs.writeSync(fd, insert, 0, insert.length, 0)
    fs.writeSync(fd, data, 0, data.length, insert.length)
    fs.closeSync(fd);
}

function create_file(filename) {
    if (false === fs.existsSync(filename)) {
        // create file if not exists
        fs.writeFileSync(filename, ``);
    }
}
