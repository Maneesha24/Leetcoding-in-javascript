const containsDuplicate = require('./index.js');

test('should pass all test conditions', () => {
  expect(containsDuplicate(nums = [1,2,3,1])).toBe(true);
  expect(containsDuplicate(nums = [1,2,3,4])).toBe(false);
  expect(containsDuplicate(nums = [1,1,1,3,3,4,3,2,4,2])).toBe(true);
});