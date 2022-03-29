/**
 * @author maneeshavenigalla
 * Given n pairs of parentheses, write a function
 * to generate all combinations of well-formed parentheses.
 * @param {number} n
 * @return {string[]}
 */
// Time complexity - O(2^n)
// Space complexity - O(N)
 var generateParenthesis = function(n) {

    let result = [];

    let paran = [];
    
    const dfs = (openCount, closeCount) => {
        if(openCount == n && closeCount == n) {
            result.push([...paran].join(''));
            return result;
        }

        if(openCount < n) {
            paran.push('(');
            dfs(openCount + 1, closeCount);
            paran.pop();
        } 
        
        if (closeCount < openCount) {
            paran.push(')');
            dfs(openCount, closeCount + 1);
            paran.pop();
        }
    }

    dfs(0,0);
    return result;
};

module.exports = generateParenthesis;