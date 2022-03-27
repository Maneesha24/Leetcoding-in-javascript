const construct2DArray = require('./index.js');

test('should pass all test conditions', () => {
  expect(construct2DArray(original = [1,2,3,4], m = 2, n = 2)).toStrictEqual([[1,2],[3,4]]);
  expect(construct2DArray(original = [1,2,3], m = 1, n = 3)).toStrictEqual([[1,2,3]]);
  expect(construct2DArray(original = [1,2], m = 1, n = 1)).toStrictEqual([]);
});