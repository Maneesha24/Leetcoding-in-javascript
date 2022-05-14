/**
 * @author maneeshavenigalla
 * A peak element is an element that is strictly greater than its neighbors. Given an integer
 * array nums, find a peak element, and return its index. If the array contains multiple peaks, 
 * return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -∞. You must 
 * write an algorithm that runs in O(log n) time.
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right)/2);

        if(nums[mid] > nums[mid + 1]){
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

module.exports = findPeakElement;