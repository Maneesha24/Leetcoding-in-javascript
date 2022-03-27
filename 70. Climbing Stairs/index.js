/**
 * @author maneeshavenigalla
 * You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 
 * steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(N)
var climbStairs = function (n) {

    let stairs = [1,1];

    for(let i = 2; i <= n; i++) {
        stairs[i] = stairs[i - 1] + stairs[i - 2];
    }

    return stairs[n];
};


module.exports = climbStairs;