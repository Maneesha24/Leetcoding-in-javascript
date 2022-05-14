const hammingWeight = require('./index.js');

test('should pass all test conditions', () => {
    expect(hammingWeight(parseInt("00000000000000000000000000001011", 8))).toBe(3);
    expect(hammingWeight(parseInt("00000000000000000000000010000000", 8))).toBe(1);
});