const search = require('./index.js');

test('should pass all test conditions', () => {
  expect(search(nums = [-1,0,3,5,9,12], target = 9)).toBe(4);
  expect(search(nums = [-1,0,3,5,9,12], target = 2)).toBe(-1);
});