/**
 * @author maneeshavenigalla
 * Let's call an array arr a mountain if the following properties hold:
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 * Given an integer array arr that is guaranteed to be a mountain, return any i 
 * such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]. 
 * @param {number[]} arr
 * @return {number}
 */
// Time complexity - O(logN)
// Space complexity - O(1)
var peakIndexInMountainArray = function (arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);

        if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        }

        if(arr[mid] > arr[mid - 1]) {
            left = mid;
        } else if (arr[mid] > arr[mid + 1]) {
            right = mid;
        }
    }

    return -1;
};

module.exports = peakIndexInMountainArray;