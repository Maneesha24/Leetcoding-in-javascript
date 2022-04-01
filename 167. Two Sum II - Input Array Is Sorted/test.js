const twoSum = require('./index.js');

test('should pass all test conditions', () => {
  expect(twoSum(numbers = [2,7,11,15], target = 9)).toStrictEqual([1,2]);
  expect(twoSum(numbers = [2,3,4], target = 6)).toStrictEqual([1,3]);
  expect(twoSum(numbers = [-1,0], target = -1)).toStrictEqual([1,2]);
});