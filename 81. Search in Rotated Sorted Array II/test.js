const search = require('./index.js');

test('should pass the test cases', () => {
    expect(search(nums = [2,5,6,0,0,1,2], target = 0)).toBe(true);
    expect(search(nums = [2,5,6,0,0,1,2], target = 3)).toBe(false);
    expect(search(nums = [1,0,1,1,1], target = 0)).toBe(true);
});