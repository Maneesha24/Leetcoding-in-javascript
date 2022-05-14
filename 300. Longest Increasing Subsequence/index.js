/**
 * @author maneeshavenigalla
 * Given an integer array nums, return the length of the longest strictly increasing subsequence. A 
 * subsequence is a sequence that can be derived from an array by deleting some or no elements without 
 * changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(N ^ 2)
// Space complexity - O(N)
var lengthOfLIS = function (nums) {

    let lisArr = new Array(nums.length).fill(1);

    for(let i = nums.length - 1; i >= 0; i--) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] < nums[j]) {
                lisArr[i] = Math.max(lisArr[i], 1 + lisArr[j]);
            }
        }
    }

    return Math.max(...lisArr);
};

module.exports = lengthOfLIS;