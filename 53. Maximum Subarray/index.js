/**
 * @author maneeshavenigalla
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has 
 * the largest sum and return its sum. A subarray is a contiguous part of an array.
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var maxSubArray = function (nums) {

    let currentSum = nums[0];
    let globalSum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        globalSum = Math.max(currentSum, globalSum);
    }

    return globalSum;
};

module.exports = maxSubArray;