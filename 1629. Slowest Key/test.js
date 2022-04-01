const slowestKey = require('./index.js');

test('should pass the test cases', () => {
//   expect(slowestKey(releaseTimes = [9,29,49,50], keysPressed = "cbcd")).toBe("c");
//   expect(slowestKey(releaseTimes = [12,23,36,46,62], keysPressed = "spuda")).toBe("a");
  expect(slowestKey(releaseTimes = [19,22,28,29,66,81,93,97], keysPressed = "fnfaaxha")).toBe("a");
});
