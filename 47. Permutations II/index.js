/**
 * @author maneeshavenigalla
 * Given a collection of numbers, nums, that might contain duplicates, return all possible 
 * unique permutations in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {

    nums.sort((a, b) => a - b);
    let result = [];

    const helper = (arr, permutation) => {
        if (!arr.length) {
            result.push(permutation);
            return result;
        }

        let prev = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (prev == arr[i]) {
                continue;
            }

            let permuted = arr.slice(0, i).concat(arr.slice(i + 1));
            helper(permuted, [...permutation, arr[i]]);

            prev = arr[i];
        }
    }

    helper(nums, []);
    return result;
};

var permuteUnique = function (nums) {

    if (nums.length == 1) {
        return [nums];
    }

    let result = [];
    let prev = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];

        if(prev == current) {
            continue;
        }

        prev = current;
        let remaining = nums.slice(0, i).concat(nums.slice(i + 1));
        let permuteRemaining = permuteUnique(remaining);

        for (let j = 0; j < permuteRemaining.length; j++) {
            let final = [current].concat(permuteRemaining[j]);
            result.push(final);
        }
    }

    return result;
};

module.exports = permuteUnique;