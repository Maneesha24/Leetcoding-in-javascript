/**
 * @author maneeshavenigalla
 * Given an array nums of distinct integers, return all the possible permutations. You can
 * return the answer in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    
    if(nums.length == 1) {
        return [nums];
    }

    let result = [];

    for(let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let remaining = nums.slice(0, i).concat(nums.slice(i + 1));
        let permuteRemaining = permute(remaining);

        for(let j = 0; j < permuteRemaining.length; j++) {
            let final = [current].concat(permuteRemaining[j]);
            result.push(final);
        }
    }

    return result;
};

module.exports = permute;