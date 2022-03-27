/**
 * @author maneeshavenigalla
 * Given an array nums of size n, return the majority element. The majority element is the element that 
 * appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(N * log N)
// Space complexity - O(1)
 var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);

    return nums[Math.floor(nums.length/2)];
};

// Time complexity - O(N)
// Space complexity - O(N)
var majorityElement = function(nums) {
    
    let numObj = {};
    let majorLen = Math.floor(nums.length/2);

    for(const num of nums) {
        if(num in numObj) {
            numObj[num] += 1;
        } else {
            numObj[num] = 1;
        }

        if(numObj[num] > majorLen) {
            return num;
        }
    }
};


module.exports = majorityElement;