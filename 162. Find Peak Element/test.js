const findPeakElement = require('./index.js');

test('should pass all test conditions', () => {
  expect(findPeakElement(nums = [1,2,3,1])).toBe(2);
  expect(findPeakElement(nums = [1,2,1,3,5,6,4])).toBe(5);
});