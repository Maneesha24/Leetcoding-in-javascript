/**
 * @author maneeshavenigalla
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
 * that the number could represent. Return the answer in any order. A mapping of digit to letters
 * (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    const digitsObj = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    let result = [];

    const dfs = (index, str) => {

        if(index == digits.length) {
            result.push(str);
            return result;
        }

        for(let char of digitsObj[digits[index]]) {
            dfs(index + 1, str + char);
        }

    }

    if(digits.length == 0) {
        return [];
    } else {
        dfs(0, "");
    }
    return result;
};

module.exports = letterCombinations;