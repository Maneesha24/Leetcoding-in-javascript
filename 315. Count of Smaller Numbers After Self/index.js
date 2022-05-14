/**
 * @author maneeshavenigalla
 * You are given an integer array nums and you have to return a new counts array. The counts array has
 * the property where counts[i] is the number of smaller elements to the right of nums[i].
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {

    let result = new Array(nums).fill(0);
    let arr = [];

    for(let i = nums.length - 1; i >= 0; i--) {
        let min = getBinarySearch(arr, nums[i]);
        result[i] = min;
        arr.splice(min, 0, nums[i]);
    }

    return result;
};

const getBinarySearch = (nums, target) => {

    let left = 0;
    let right = nums.length;

    while(left < right) {
        let mid = Math.floor((left + right)/2);

        if(nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

module.exports = countSmaller;