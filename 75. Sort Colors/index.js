/**
 * @author maneeshavenigalla
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects
 * of the same color are adjacent, with the colors in the order red, white, and blue. We will use the 
 * integers 0, 1, and 2 to represent the color red, white, and blue, respectively. You must solve this 
 * problem without using the library's sort function.
 * @param {number[]} nums
 * @return {number[]}
 */
var sortColors = function (nums) {

    let left = 0;
    let right = nums.length - 1;
    let i = 0;

    while(i <= right) {
        if(nums[i] == 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if (nums[i] == 1) {
            i++;
        } else {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        }
    }

    return nums;
};

module.exports = sortColors;