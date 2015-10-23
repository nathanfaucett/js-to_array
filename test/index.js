var tape = require("tape"),
    toArray = require("../src/index");


tape("toArray(object : ArrayLike)", function(assert) {
    assert.deepEqual(toArray({
        length: 2,
        0: 0,
        1: 1
    }), [0, 1], "should convert object to Array");
    assert.end();
});
