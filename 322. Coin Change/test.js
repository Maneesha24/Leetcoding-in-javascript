const coinChange = require('./index.js');

test('should pass all test conditions', () => {
  expect(coinChange(coins = [1,2,5], amount = 11)).toBe(3);
  expect(coinChange(coins = [2], amount = 3)).toBe(-1);
  expect(coinChange(coins = [1], amount = 0)).toBe(0);
});