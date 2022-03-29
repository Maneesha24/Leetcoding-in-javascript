const uniquePaths = require('./index.js');

test('should pass all test conditions', () => {
  expect(uniquePaths(m = 3, n = 7)).toBe(28);
  expect(uniquePaths(m = 3, n = 2)).toBe(3);
});