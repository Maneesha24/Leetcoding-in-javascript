/**
 * @author maneeshavenigalla
 * Given an array of integers nums and an integer target, return indices of the two numbers such that 
 * they add up to target. You may assume that each input would have exactly one solution, and you may 
 * not use the same element twice. You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time complexity - O(N * 2)
// Space complexity - O(1)
var twoSum = function (nums, target) {

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

// Time complexity - O(N)
// Space complexity - O(N)
var twoSum = function (nums, target) {

    let numObj = {};

    for(let i = 0; i < nums.length; i++) {
        if((target - nums[i]) in numObj) {
            return [numObj[target - nums[i]], i];
        } else {
            numObj[nums[i]] = i;
        }
    }
};

module.exports = twoSum;