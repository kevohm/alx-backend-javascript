const calculateNumber = require("./0-calcul")
var assert = require("assert");
describe("0-calcul", function () {
  describe("#calculateNumber()", function () {
    it("should return 4 after rounding", function () {
      assert.equal(calculateNumber(1, 3), 4);
    });
  });
});
