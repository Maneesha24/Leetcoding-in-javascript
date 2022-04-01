const topKFrequent = require('./index.js');

test('should pass the test cases', () => {
  expect(topKFrequent(words = ["i","love","leetcode","i","love","coding"], k = 2)).toStrictEqual(["i","love"]);
  expect(topKFrequent(words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4)).toStrictEqual(["the","is","sunny","day"]);
});