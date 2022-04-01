/**
 * @author maneeshavenigalla
 * Given a sorted integer array arr, two integers k and x, return the k closest integers to
 * x in the array. The result should also be sorted in ascending order.
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {

    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);

        if(x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return arr.slice(left, left + k);
};

module.exports = findClosestElements;