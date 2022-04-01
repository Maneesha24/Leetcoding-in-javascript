const numIslands = require('./index.js');

test('should pass the test cases', () => {
    expect(numIslands(grid = [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
      ])).toBe(1);
    expect(numIslands(grid = [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
      ])).toBe(3);
});