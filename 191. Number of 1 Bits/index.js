/**
 * Write a function that takes an unsigned integer and returns the number of '1' bits it 
 * has (also known as the Hamming weight).
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {

    let result = 0;

    while(n) {
        result += n & 1; 
        n = n >> 1;
    }

    return result;
};

module.exports = hammingWeight;