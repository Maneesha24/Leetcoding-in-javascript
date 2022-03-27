const IndexPairsOfString = require('./index.js');

test('should pass all test conditions', () => {
  expect(IndexPairsOfString(text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"])).toStrictEqual([[3,7],[9,13],[10,17]]);
//   expect(IndexPairsOfString(text = "ababa", words = ["aba","ab"])).toStrictEqual([[0,1],[0,2],[2,3],[2,4]]);
});