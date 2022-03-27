const findDisappearedNumbers = require('./index.js');

test('should pass all test conditions', () => {
  expect(findDisappearedNumbers(nums = [4,3,2,7,8,2,3,1])).toStrictEqual([5,6]);
  expect(findDisappearedNumbers(nums = [1,1])).toStrictEqual([2]);
});