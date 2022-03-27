const maxProduct = require('./index.js');

test('should pass all test conditions', () => {
  expect(maxProduct([2,3,-2,4])).toBe(6);
  expect(maxProduct([-2,0,-1])).toBe(0);
});