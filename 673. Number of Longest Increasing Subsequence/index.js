/**
 * @author maneeshavenigalla
 * Given an integer array nums, return the number of longest increasing subsequences. Notice that 
 * the sequence has to be strictly increasing.
 * @param {number[]} nums
 * @return {number}
 */
 var findNumberOfLIS = function (nums) {

    let lisArr = new Array(nums.length).fill(1);

    for(let i = nums.length - 1; i>= 0; i--) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] < nums[j]) {
                lisArr[i] = Math.max(lisArr[i], 1 + lisArr[j]);
            }
        }
    }

    return lisArr;
};

module.exports = findNumberOfLIS;