const numPairsDivisibleBy60 = require('./index.js');

test('should pass the test cases', () => {
  expect(numPairsDivisibleBy60(time = [30,20,150,100,40])).toBe(3);
  expect(numPairsDivisibleBy60(time = [60,60,60])).toBe(3);
});