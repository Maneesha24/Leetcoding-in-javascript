/**
 * @author maneeshavenigalla
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
 * ans[i] is the number of 1's in the binary representation of i.
 * @param {number} n
 * @return {number[]}
 */
// Time complexity - O(N)
// Space complexity - O(1)
 var countBits = function(n) {

    let result = [];
    
    for(let i = 0; i <= n; i++) {
        result.push(i.toString(2).replace(/0/g, '').length)
    }

    return result;
};

// Time complexity - O(N)
// Space complexity - O(1)
var countBits = function(n) {

    let result = Array(n + 1).fill(0);

    let offset = 1;

    for (let i = 1; i <= n; i++) {
      if (offset * 2 === i) {
        offset = i;
      }
      result[i] = 1 + result[i - offset];
    }
  
    return result;
};

module.exports = countBits;