const longestPalindrome = require('./index.js');

test('should pass the test cases', () => {
  expect(longestPalindrome("babad")).toBe("bab");
  expect(longestPalindrome("cbbd")).toBe("bb");
});