/**
 * @author maneeshavenigalla
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The 
 * robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or
 * right at any point in time. Given the two integers m and n, return the number of possible unique paths that the
 * robot can take to reach the bottom-right corner. The test cases are generated so that the answer will be less
 * than or equal to 2 * 109.
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Time complexity - O(m * n)
// Space complexity - O(m * n)
 var uniquePaths = function(m, n) {
    
    let paths = new Array(m);

    for(let i = 0; i < m; i++) {
        paths[i] = new Array(n);
        for(let j = 0; j < n; j++) {

            if(i > 0 && j > 0) {
                paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
            } else if(i > 0) {
                paths[i][j] = paths[i - 1][j];
            }  else if(j > 0) {
                paths[i][j] = paths[i][j - 1];
            } else {
                paths[i][j] = 1;
            }
        }
    }

    return paths[m - 1][n - 1];
};

module.exports = uniquePaths;