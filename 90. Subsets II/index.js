/**
 * @author maneeshavenigalla
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The 
 * solution set must not contain duplicate subsets. Return the solution in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

    nums.sort((a, b) => a - b);

    let result = [];

    let subset = [];

    const dfs = (index) => {
        if(index == nums.length) {
            result.push([...subset]);
            return result;
        }

        subset.push(nums[index]);
        dfs(index + 1);

        subset.pop();
        while(index + 1 < nums.length && nums[index] == nums[index + 1]) {
            index++;
        }
        dfs(index + 1);
    }

    dfs(0);
    return result;
};

module.exports = subsetsWithDup;