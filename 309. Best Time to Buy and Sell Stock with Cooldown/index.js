/**
 * @author maneeshavenigalla
 * You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit
 * you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock 
 * multiple times) with the following restrictions: After you sell your stock, you cannot buy stock on the next day 
 * (i.e., cooldown one day).
 * @param {number[]} prices
 * @return {number}
 */
// Time complexity -
// Space complexity - 
var maxProfit = function (prices) {
    let map = {};

    const dfs = (i, canBuy) => {

        if (i >= prices.length) {
            return 0;
        }

        if (map[`${i}-${canBuy}`]) {
            return map[`${i}-${canBuy}`];
        }

        if (canBuy == 0) {
            let buy = dfs(i + 1, 1) - prices[i];
            let noBuy = dfs(i + 1, 0);

            map[`${i}-${canBuy}`] = Math.max(buy, noBuy);
        } else {
            let sell = dfs(i + 2, 0) + prices[i];
            let noSell = dfs(i + 1, 1);

            map[`${i}-${canBuy}`] = Math.max(sell, noSell);
        }
        return map[`${i}-${canBuy}`];
    };

    return dfs(0, 0);
};

// Time complexity - O(n^2)
// Space complexity - O(1)
var maxProfit = (prices) => {
    var buy = -Infinity;
    var cooldown = 0;

    return prices.reduce((sell, price) => {
       buy = Math.max(buy, cooldown - price);
       cooldown = Math.max(cooldown, sell);
       return Math.max(sell, buy + price);
    }, 0);
}

module.exports = maxProfit;