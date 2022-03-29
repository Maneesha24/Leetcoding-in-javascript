/**
 * @author maneeshavenigalla
 * Given an integer array nums of unique elements, return all possible subsets (the power set). The solution 
 * set must not contain duplicate subsets. Return the solution in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
// Number of subsets - 2 ^ n
// Time complexity - O(N * 2 ^N)
// Space complexity - O(2 ^ N)
 var subsets = function(nums) {
    
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
        dfs(index + 1);
    }

    dfs(0);
    return result;
};

module.exports = subsets;