/**
 * @author maneeshavenigalla
 * Given an m x n grid of characters board and a string word, return true if word exists in the 
 * grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells 
 * are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//  Time O(mn * 4^l), l = word.length
//  Space O(mn + l)
var exist = function (board, word) {

    let dirs = [[0,1],[0,-1],[1,0],[-1,0]]

    const traverse = (x, y, k) => {
        if(board[x][y] !== word[k]) {
            return false;
        }

        if(k == word.length - 1) {
            return true;
        }

        board[x][y] = "*";

        for (let [dx, dy] of dirs) {
            let i = x + dx;
            let j = y + dy;

            if(i >= 0 && i < board.length && j >=0 && j < board[0].length) {
                if(traverse(i, j, k + 1)) {
                    return true;
                }
            }
        }

        board[x][y] = word[k];
        return false;
    }

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(traverse(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};

module.exports = exist;