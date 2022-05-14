const countSmaller = require('./index.js');

test('should pass all test conditions', () => {
  expect(countSmaller(nums = [5,2,6,1])).toStrictEqual([2,1,1,0]);
  expect(countSmaller(nums = [-1])).toStrictEqual([0]);
  expect(countSmaller(nums = [-1,-1])).toStrictEqual([0,0]);
});