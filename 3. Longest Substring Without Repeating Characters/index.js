/**
 * @author maneeshavenigalla
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(N)
 var lengthOfLongestSubstring = function(s) {
    
    let left = 0;
    let right = 0;
    let charSet = new Set();
    let maxLength = 0;

    while(right < s.length) {
        if(charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        } else {
            charSet.add(s[right]);
            right++;
            maxLength = Math.max(maxLength, charSet.size);
        }   
    }
    return maxLength;
};


module.exports = lengthOfLongestSubstring;