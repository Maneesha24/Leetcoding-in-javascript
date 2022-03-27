const countBits = require('./index.js');

test('should pass all test conditions', () => {
  expect(countBits(n = 2)).toStrictEqual([0,1,1]);
  expect(countBits(n = 5)).toStrictEqual([0,1,1,2,1,2]);
  expect(countBits(n = 0)).toStrictEqual([0]);
});