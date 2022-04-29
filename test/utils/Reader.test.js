const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for Reader Class", () => {
    test("Read a JSON file", () => {
        const explorers = Reader.readJsonFile("./test/data/visualpartners-test.json");

        expect(explorers).not.toBe(undefined);
    });
});

