const missingNumber = require('./index.js');

test('should pass all test conditions', () => {
  expect(missingNumber(nums = [3,0,1])).toBe(2);
  expect(missingNumber(nums = [0,1])).toBe(2);
  expect(missingNumber(nums = [9,6,4,2,3,5,7,0,1])).toBe(8);
});