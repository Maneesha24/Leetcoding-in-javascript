const kClosest = require('./index.js');

test('should pass the test cases', () => {
  expect(kClosest(points = [[1,3],[-2,2]], k = 1)).toStrictEqual([[-2,2]]);
  expect(kClosest(points = [[3,3],[5,-1],[-2,4]], k = 2)).toStrictEqual([[3,3],[-2,4]]);
});