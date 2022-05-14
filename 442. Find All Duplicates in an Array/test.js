const findDuplicates = require('./index.js');

test('should pass all test conditions', () => {
  expect(findDuplicates([4,3,2,7,8,2,3,1])).toStrictEqual([2,3]);
  expect(findDuplicates([1,1,2])).toStrictEqual([1]);
  expect(findDuplicates([1])).toStrictEqual([]);
});