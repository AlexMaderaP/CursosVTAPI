class Reader {
    static readJsonFile(path) {
        const fs = require("fs");
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;