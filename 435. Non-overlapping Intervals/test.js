const eraseOverlapIntervals = require('./index.js');

test('should pass all test conditions', () => {
  expect(eraseOverlapIntervals(intervals = [[1,2],[2,3],[3,4],[1,3]])).toBe(1);
  expect(eraseOverlapIntervals(intervals = [[1,2],[1,2],[1,2]])).toBe(2);
  expect(eraseOverlapIntervals(intervals = [[1,2],[2,3]])).toBe(0);
});