/**
 * @author maneeshavenigalla
 * Given an integer array nums of length n and an integer target, find three integers in nums such 
 * that the sum is closest to target. Return the sum of the three integers.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    let closest = Infinity;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let currentSum = nums[i] + nums[j] + nums[k];

            if (Math.abs(closest - target) > Math.abs(currentSum - target)) {
                closest = currentSum;
            }

            if (currentSum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return closest;
};

module.exports = threeSumClosest;