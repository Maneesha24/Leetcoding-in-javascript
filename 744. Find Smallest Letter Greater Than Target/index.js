/**
 * @author maneeshavenigalla
 * Given a characters array letters that is sorted in non-decreasing order and a character target, 
 * return the smallest character in the array that is larger than target.
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// Time complexity - O(logN)
// Space complexity - O(1)
 var nextGreatestLetter = function(letters, target) {
    
    let left = 0;
    let right = letters.length - 1;

    let resultChar = letters[0];

    while(left <= right) {
        mid = Math.floor((left+right)/2);

        if(letters[mid] > target) {
            resultChar = letters[mid];
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return resultChar;
};

module.exports = nextGreatestLetter;