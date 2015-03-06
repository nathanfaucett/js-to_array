var isArrayLike = require("is_array_like");


var arraySlice = Array.prototype.slice;


module.exports = function toArray(object) {
    var result, length, i;

    if (isArrayLike(object)) {
        length = object.length < 0 ? 0 : object.length;

        if (length === 0 || (length - 1) in object) {
            if (object.hasOwnProperty) {
                try {
                    return arraySlice.call(object);
                } catch (e) {}
            }

            result = new Array(length);
            i = 0;

            while (length--) {
                result[i] = object[i];
                i++;
            }

            return result;
        } else {
            throw TypeError("toArray(object) Object should have keys for indices");
        }
    } else {
        throw TypeError("toArray(object) Array like object expected");
    }
};
