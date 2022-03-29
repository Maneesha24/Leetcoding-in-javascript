/**
 * @author maneeshavenigalla
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount
 * of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses
 * have security systems connected and it will automatically contact the police if two adjacent houses 
 * were broken into on the same night. Given an integer array nums representing the amount of money of 
 * each house, return the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(N)
var rob = function (nums) {

    if(nums.length == 1) {
        return nums[0];
    }

    let houses = [nums[0], Math.max(nums[0], nums[1])];

    for(let i = 2; i < nums.length; i++) {
        houses[i] = Math.max(houses[i - 2] + nums[i], houses[i - 1]);
    }

    return houses[houses.length - 1];
};

module.exports = rob;