/**
 * @author maneeshavenigalla
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements 
 * sequence. You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(N)
var longestConsecutive = function (nums) {

    let numSet = new Set(nums);
    let result = 0;

    for(const num of nums) {
        if(!numSet.has(num - 1)) {

            let current = num + 1;
            let count = 1;

            while(numSet.has(current)) {
                current++;
                count++;
            }

            result = Math.max(result, count);
        }
    }
    return result;
};

// [100,4,200,1,3,2]
module.exports = longestConsecutive;