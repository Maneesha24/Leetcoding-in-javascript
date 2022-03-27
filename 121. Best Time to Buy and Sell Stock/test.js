const maxProfit = require('./index.js');

test('should pass all test conditions', () => {
  expect(maxProfit(prices = [7,1,5,3,6,4])).toBe(5);
  expect(maxProfit(prices = [7,6,4,3,1])).toBe(0);
});