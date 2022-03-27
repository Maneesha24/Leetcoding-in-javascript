const backspaceCompare = require('./index.js');

test('should pass all test conditions', () => {
  expect(backspaceCompare(s = "ab#c", t = "ad#c")).toBe(true);
  expect(backspaceCompare(s = "ab##", t = "c#d#")).toBe(true);
  expect(backspaceCompare(s = "a#c", t = "b")).toBe(false);
});