/**
 * @author maneeshavenigalla
 * Given an array nums of n integers where nums[i] is in the range [1, n], return 
 * an array of all the integers in the range [1, n] that do not appear in nums.
 * @param {number[]} nums
 * @return {number[]}
 */
// Time complexity - O(N)
// Space complexity - O(N)
var findDisappearedNumbers = function (nums) {

    let len = nums.length;
    nums = new Set(nums);

    let result = [];

    for (let i = 1; i <= len; i++) {
        if (!nums.has(i)) {
            result.push(i);
        }
    }

    return result;

};

// Time complexity - O(N)
// Space complexity - O(1)
var findDisappearedNumbers = function (nums) {
    let len = nums.length;

    let result = [];
    for (let i = 0; i < len; i++) {
        result[i] = i + 1;
    }

    for (const val of nums) {
        result[val - 1] = -1
    }
    
    return result.filter(i => (i > 0))
}

module.exports = findDisappearedNumbers;