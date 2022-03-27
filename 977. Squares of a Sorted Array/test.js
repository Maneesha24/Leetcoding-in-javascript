const sortedSquares = require('./index.js');

test('should pass all test conditions', () => {
  expect(sortedSquares(nums = [-4,-1,0,3,10])).toStrictEqual([0,1,9,16,100]);
  expect(sortedSquares(nums = [-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121]);
});