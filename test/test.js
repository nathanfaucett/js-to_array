var assert = require("assert"),
    toArray = require("../src/index");


describe("toArray(object : ArrayLike)", function() {
    it("should convert object to Array", function() {
        assert.deepEqual(toArray({
            length: 2,
            0: 0,
            1: 1
        }), [0, 1]);
    });
});
