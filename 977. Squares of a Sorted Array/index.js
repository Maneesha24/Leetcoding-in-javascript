/**
 * @author maneeshavenigalla
 * Given an integer array nums sorted in non-decreasing order, return an
 * array of the squares of each number sorted in non-decreasing order.
 * @param {number[]} nums
 * @return {number[]}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var sortedSquares = function (nums) {

    let left = 0;
    let right = nums.length - 1;
    let i = nums.length - 1;
    let result = [];

    while (left <= right) {
        if (nums[left] ** 2 < nums[right] ** 2) {
            result[i] = nums[right] ** 2;
            right--;
        } else {
            result[i] = nums[left] ** 2;
            left++;
        }
        i--;
    }

    return result;
};

// Time complexity - O(N * logN)
// Space complexity - O(1)
var sortedSquares = function (nums) {

    nums = nums.map(val => val ** 2);
    return nums.sort((a, b) => a - b);
};

module.exports = sortedSquares;