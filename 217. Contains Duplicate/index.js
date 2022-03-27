/**
 * @author maneeshavenigalla
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
// Time complexity - O(N * 2)
// Space complexity - O(1)
var containsDuplicate = function (nums) {

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                return true;
            }
        }
    }

    return false;
};

// Time complexity - O(N * logN)
// Space complexity - O(1)
var containsDuplicate = function (nums) {

    nums.sort((a, b) => a - b);

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] == nums[i - 1]) {
            return true;
        }
    }

    return false;
};

// Time complexity - O(N)
// Space complexity - O(N)
var containsDuplicate = function (nums) {

    let numSet = new Set();

    for(const num of nums) {
        if(numSet.has(num)) {
            return true;
        } else {
            numSet.add(num);
        }
    }

    return false;
};

module.exports = containsDuplicate;