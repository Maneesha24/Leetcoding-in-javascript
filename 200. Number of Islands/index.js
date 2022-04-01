/**
 * @author maneeshavenigalla
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number 
 * of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or
 * vertically. You may assume all four edges of the grid are all surrounded by water.
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {

    let result = 0;

    const traverse = (i, j) => {
        while(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] == "1") {
            grid[i][j] = '0';

            traverse(i + 1, j);
            traverse(i, j + 1);
            traverse(i, j - 1);
            traverse(i - 1, j);
        }
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == "1") {
                result++;
                traverse(i, j);
            }
        } 
    }

    return result;
};

module.exports = numIslands;