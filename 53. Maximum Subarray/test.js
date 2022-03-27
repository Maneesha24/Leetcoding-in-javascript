const maxSubArray = require('./index.js');

test('should pass all test conditions', () => {
  expect(maxSubArray(nums = [-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
  expect(maxSubArray(nums = [1])).toBe(1);
  expect(maxSubArray(nums = [5,4,-1,7,8])).toBe(23);
});