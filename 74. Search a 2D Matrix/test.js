const searchMatrix = require('./index.js');

test('should pass all test conditions', () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toBe(true);
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toBe(false);
    expect(searchMatrix([[1],[3]], 3)).toBe(true);
});