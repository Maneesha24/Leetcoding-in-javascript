const findNumberOfLIS = require('./index.js');

test('should pass the test cases', () => {
//   expect(findNumberOfLIS([1,3,5,4,7])).toStrictEqual(2);
  expect(findNumberOfLIS([2,2,2,2,2])).toStrictEqual(5);
});