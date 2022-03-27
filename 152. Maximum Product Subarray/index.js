/**
 * @author maneeshavenigalla
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest 
 * product, and return the product. The test cases are generated so that the answer will fit in a 32-bit
 * integer. A subarray is a contiguous subsequence of the array.
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var maxProduct = function (nums) {

    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];

    for(let i = 1; i < nums.length; i++) {
        currentMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);
        currentMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);

        prevMin = currentMin;
        prevMax = currentMax;

        result = Math.max(result, prevMax);
    }

    return result;
};

module.exports = maxProduct;