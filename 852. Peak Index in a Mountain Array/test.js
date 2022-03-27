const peakIndexInMountainArray = require('./index.js');

test('should pass all test conditions', () => {
  expect(peakIndexInMountainArray(arr = [0,1,0])).toBe(1);
  expect(peakIndexInMountainArray(arr = [0,2,1,0])).toBe(1);
  expect(peakIndexInMountainArray(arr = [0,10,5,2])).toBe(1);
});