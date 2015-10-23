var isArrayLike = require("is_array_like");


var Array_slice = Array.prototype.slice;


module.exports = toArray;


function toArray(value) {
    var result, length, i;

    if (isArrayLike(value)) {
        length = value.length < 0 ? 0 : value.length;

        if (length === 0 || (length - 1) in value) {
            if (value.hasOwnProperty) {
                try {
                    return Array_slice.call(value);
                } catch (e) {}
            }

            result = new Array(length);
            i = 0;

            while (length--) {
                result[i] = value[i];
                i++;
            }

            return result;
        } else {
            throw TypeError("toArray(value) value should have keys for indices");
        }
    } else {
        throw TypeError("toArray(value) Array like value expected");
    }
}
