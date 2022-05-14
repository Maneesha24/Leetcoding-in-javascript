/**
 * @author maneeshavenigalla
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears 
 * once or twice, return an array of all the integers that appears twice. You must write an algorithm that runs in O(n) 
 * time and uses only constant extra space.
 * @param {number[]} nums
 * @return {number[]}
 */
// Time complexity - O(N)
// Space complexity - O(N)
var findDuplicates = function (nums) {

    let numObj = {};

    for (const num of nums) {
        if (num in numObj) {
            numObj[num] += 1
        } else {
            numObj[num] = 1
        }
    }

    return Object.keys(numObj).filter(num => numObj[num] != 1).map(val => parseInt(val));
};

// Time complexity - O(N * logN)
// Space complexity - O(1)
var findDuplicates = function (nums) {

    // result
    const res = [];
    // iter thru numbers
    for (let i = 0; i < nums.length; i++) {
        // take current number, use as an index (since 1 <= nums[i] <= n)
        // use abs because we will be flipping signs later
        const idx = Math.abs(nums[i]) - 1;
        // check if we've already seen this number (flipped sign)
        if (nums[idx] < 0) {
            res.push(idx + 1);
        }
        // flip sign (to mark this number)
        nums[idx] = -nums[idx];
    }
    return res;
};

module.exports = findDuplicates;