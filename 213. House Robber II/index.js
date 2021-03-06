/**
 * @author maneeshavenigalla
 * You are a professional robber planning to rob houses along a street. Each house 
 * has a certain amount of money stashed. All houses at this place are arranged in 
 * a circle. That means the first house is the neighbor of the last one. Meanwhile, 
 * adjacent houses have a security system connected, and it will automatically 
 * contact the police if two adjacent houses were broken into on the same night. 
 * Given an integer array nums representing the amount of money of each house, return 
 * the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    const helper = (arr) => {
        
        let robHouse1 = 0;
        let robHouse2 = 0;

        for(let i = 0; i < arr.length; i++) {
            let newRob = Math.max(robHouse1 + arr[i], robHouse2);
            robHouse1 = robHouse2;
            robHouse2 = newRob;
        }

        return robHouse2;
    }

    return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
};

module.exports = rob;