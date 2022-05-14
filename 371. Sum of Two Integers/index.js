/**
 * @author maneeshavenigalla
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let carry;

    while (b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }

    return a;
};

module.exports = getSum;