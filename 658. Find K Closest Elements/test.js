const findClosestElements = require('./index.js');

test('should pass the test cases', () => {
  expect(findClosestElements(arr = [1,2,3,4,5], k = 4, x = 3)).toStrictEqual([1,2,3,4]);
  expect(findClosestElements(arr = [1,2,3,4,5], k = 4, x = -1)).toStrictEqual([1,2,3,4]);
});