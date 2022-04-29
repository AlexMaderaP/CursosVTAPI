const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for Reader Class", () => {
    test("Read a JSON file", () => {
        const explorers = Reader.readJsonFile("visualpartners.json");

        expect(explorers).not.toBe(undefined);
    });
});
