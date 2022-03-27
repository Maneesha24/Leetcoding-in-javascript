const majorityElement = require('./index.js');

test('should pass all test conditions', () => {
  expect(majorityElement(nums = [3,2,3])).toBe(3);
  expect(majorityElement(nums = [2,2,1,1,1,2,2])).toBe(2);
});