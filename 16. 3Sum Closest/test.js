const threeSumClosest = require('./index.js');

test('should pass the test cases', () => {
    expect(threeSumClosest(nums = [-1, 2, 1, -4], target = 1)).toBe(2);
    expect(threeSumClosest(nums = [0, 0, 0], target = 1)).toBe(0);
});