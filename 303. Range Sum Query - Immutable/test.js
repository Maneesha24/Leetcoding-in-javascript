const NumArray = require('./index');

test('should pass the test cases', () => {
    let numArray1 = new NumArray([-2, 0, 3, -5, 2, -1]);
    expect(numArray1.sumRange(0, 2)).toBe(1);
    expect(numArray1.sumRange(2, 5)).toBe(-1);
    expect(numArray1.sumRange(0, 5)).toBe(-3);
});