const totalFruit = require('./index.js');

test('should pass the test cases', () => {
    expect(totalFruit([1, 2, 1])).toBe(3);
    expect(totalFruit([0, 1, 2, 2])).toBe(3);
    expect(totalFruit([1, 2, 3, 2, 2])).toBe(4);
});