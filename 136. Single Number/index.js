/**
 * @author maneeshavenigalla
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You
 * must implement a solution with a linear runtime complexity and use only constant extra space.
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var singleNumber = function (nums) {

    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        result = result ^ nums[i];
    }

    return result;
};

module.exports = singleNumber;