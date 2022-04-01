const findMin = require('./index.js');

test('should pass the test cases', () => {
    expect(findMin(nums = [3,4,5,1,2])).toBe(1);
    expect(findMin(nums = [4,5,6,7,0,1,2])).toBe(0);
    expect(findMin(nums = [11,13,15,17])).toBe(11);
});