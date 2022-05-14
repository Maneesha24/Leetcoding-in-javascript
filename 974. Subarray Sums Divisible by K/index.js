/**
 * @author maneeshavenigalla
 * Given an integer array nums and an integer k, return the number of non-empty subarrays that
 * have a sum divisible by k. A subarray is a contiguous part of an array.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraysDivByK = function(nums, k) {
    
    let sumObj = {};
    let sum = 0;
    let res = 0;
    sumObj[0] = 1;
    
    for (const a of nums) {
        sum = (sum + a) % k;

        if (sum < 0) {
            sum += k;
        }

        if (sum in sumObj) {
            res += sumObj[sum]++;;
        } else {
            sumObj[sum] = 1;
        }
    }
    return res;
};

module.exports = subarraysDivByK;