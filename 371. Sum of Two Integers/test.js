const getSum = require('./index.js');

test('should pass all test conditions', () => {
    expect(getSum(a = 1, b = 2)).toBe(3);
    expect(getSum(a = 2, b = 3)).toBe(5);
});