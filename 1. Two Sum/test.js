const twoSum = require('./index.js');

test('should pass all test conditions', () => {
  expect(twoSum(nums = [2,7,11,15], target = 9)).toStrictEqual([0,1]);
  expect(twoSum(nums = [3,2,4], target = 6)).toStrictEqual([1,2]);
  expect(twoSum(nums = [3,3], target = 6)).toStrictEqual([0,1]);
});