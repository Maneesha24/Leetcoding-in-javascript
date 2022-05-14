/**
 * @author maneeshavenigalla
 * Given a string s, return the longest palindromic substring in s.
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let left = 0;
    let right = 0;
    let maxLength = 1;
    let start = 0;


    for(let i = 0; i < s.length; i++) {
        left = i - 1;
        right = i;

        while(left >= 0 && right < s.length && s[left] == s[right]) {

            if(right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }

        left = i - 1;
        right = i + 1;

        while(left >= 0 && right < s.length && s[left] == s[right]) {

            if(right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    return s.slice(start, start + maxLength);

}

module.exports = longestPalindrome;