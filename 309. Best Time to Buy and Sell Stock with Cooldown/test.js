const maxProfit = require('./index.js');

test('should pass all test conditions', () => {
  expect(maxProfit(nums = [1,2,3,0,2])).toBe(3);
  expect(maxProfit(nums = [1])).toBe(0);
});