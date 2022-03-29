const merge = require('./index.js');

test('should pass the test cases', () => {
    expect(merge(s = "abcabcbb")).toBe(3);
    expect(merge(s = "bbbbb")).toBe(1);
    expect(merge(s = "pwwkew")).toBe(3);
});