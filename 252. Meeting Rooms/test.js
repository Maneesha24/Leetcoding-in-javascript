const meetingRooms = require('./index.js');

test('should pass all test conditions', () => {
  expect(meetingRooms(rooms = [[0,30],[5,10],[15,20]])).toBe(false);
  expect(meetingRooms(rooms = [[7,10],[2,4]])).toBe(true);
});