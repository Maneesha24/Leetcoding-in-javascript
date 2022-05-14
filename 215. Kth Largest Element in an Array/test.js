const findKthLargest = require('./index.js');

test('should pass all test conditions', () => {
  expect(findKthLargest(nums = [3,2,1,5,6,4], k = 2)).toBe(5);
  expect(findKthLargest(nums = [3,2,3,1,2,4,5,5,6], k = 4)).toBe(4);
});