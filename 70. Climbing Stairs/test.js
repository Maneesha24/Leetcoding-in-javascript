const climbStairs = require('./index.js');

test('should pass all test conditions', () => {
  expect(climbStairs(n = 2)).toBe(2);
  expect(climbStairs(n = 3)).toBe(3);
  expect(climbStairs(n = 4)).toBe(5);
});