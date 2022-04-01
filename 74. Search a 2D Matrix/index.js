/**
 * @author maneeshavenigalla
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This
 * matrix has the following properties: Integers in each row are sorted from left to right. 
 * The first integer of each row is greater than the last integer of the previous row.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Time complexity - O(m + n)
// Space complexity - O(1)
 var searchMatrix = function(matrix, target) {
    
    let i = 0;
    let j = matrix[0].length - 1;

    while(i < matrix.length && j >= 0) {

        if(matrix[i][j] == target) {
            return true;
        }
        
        if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }

    return false;
};

module.exports = searchMatrix;