/**
 * @author maneeshavenigalla
 * Given two strings s and t, return true if they are equal when both are typed into empty text 
 * editors. '#' means a backspace character. Note that after backspacing an empty text, the text
 * will continue empty.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Time complexity - O(N)
// Space complexity - O(N)
 var backspaceCompare = function(s, t) {

    const backspace = (str) => {
        str = str.split('');

        let result = [];
        for(const char of str) {
            if(char == '#') {
                result.pop();
            } else {
                result.push(char);
            }
        }

        return result.join('');
    }

    return backspace(s) == backspace(t);
};

// Time complexity - O(N)
// Space complexity - O(1)
var backspaceCompare = function(s, t) {

    let i = s.length - 1;
    let j = t.length - 1;
    let sSkipCount = 0;
    let tSkipCount = 0;
  
    while (i >= 0 || j >= 0) {
      if (s[i] === "#") {
        sSkipCount++;
        i--;
      } else if (sSkipCount > 0 && i >= 0) {
        sSkipCount--;
        i--;
      } else if (t[j] === "#") {
        tSkipCount++;
        j--;
      } else if (tSkipCount > 0 && j >= 0) {
        tSkipCount--;
        j--;
      } else if (s[i] !== t[j]) {
        return false;
      } else {
        i--;
        j--;
      }
    }
    return true;
};

module.exports = backspaceCompare;