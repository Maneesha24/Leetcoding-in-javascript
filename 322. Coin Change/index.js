/**
 * @author maneeshavenigalla
 * You are given an integer array coins representing coins of different denominations and an integer 
 * amount representing a total amount of money. Return the fewest number of coins that you need to make
 * up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. 
 * You may assume that you have an infinite number of each kind of coin.
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {

    var dp = Array(amount + 1).fill(amount + 1); 

    if (amount < 0) {
        return -1;
    }
    if (amount == 0) {
        return 0;
    }
  
    dp[0] = 0;

    for(let i = 0; i <= amount; i++) {
        for(const coin of coins) {
            if(i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

module.exports = coinChange;