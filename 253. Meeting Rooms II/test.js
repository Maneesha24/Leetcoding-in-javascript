const minMeetingRooms = require('./index.js');

test('should pass all test conditions', () => {
  expect(minMeetingRooms(intervals = [[0,30],[5,10],[15,20]])).toBe(2);
  expect(minMeetingRooms(intervals = [[2,7]])).toBe(1);
  expect(minMeetingRooms(intervals = [[7, 10], [2,4]])).toBe(1);
});