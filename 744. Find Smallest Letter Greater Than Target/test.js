const nextGreatestLetter = require('./index.js');

test('should pass all test conditions', () => {
  expect(nextGreatestLetter(letters = ["c","f","j"], target = "a")).toBe("c");
  expect(nextGreatestLetter(letters = ["c","f","j"], target = "c")).toBe("f");
  expect(nextGreatestLetter(letters = ["c","f","j"], target = "d")).toBe("f");
});