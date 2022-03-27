/**
 * @author maneeshavenigalla
 * Given an array nums containing n distinct numbers in the range [0, n], return the only
 * number in the range that is missing from the array.
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var missingNumber = function (nums) {

    let numSum = 0;
    let total = 0;

    for (let i = 1; i <= nums.length; i++) {
        numSum += nums[i - 1];
        total += i;
    }

    return total - numSum;
};

// Time complexity - O(N * logN)
// Space complexity - O(1)
var missingNumber = function (nums) {

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] + 1 != nums[i + 1]) {
            return i + 1;
        }
    };
};

module.exports = missingNumber;