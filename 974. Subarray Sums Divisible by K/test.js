const subarraysDivByK = require('./index.js');

test('should pass the test cases', () => {
  expect(subarraysDivByK(nums = [4,5,0,-2,-3,1], k = 5)).toBe(7);
  expect(subarraysDivByK(nums = [5], k = 9)).toBe(0);
});