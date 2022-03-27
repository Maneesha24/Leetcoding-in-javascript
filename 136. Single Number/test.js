const singleNumber = require('./index.js');

test('should pass all test conditions', () => {
  expect(singleNumber(nums = [2,2,1])).toBe(1);
  expect(singleNumber(nums = [4,1,2,1,2])).toBe(4);
  expect(singleNumber(nums = [1])).toBe(1);
});