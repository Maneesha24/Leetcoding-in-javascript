/**
 * @author maneeshavenigalla
 * Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number
 * of intervals you need to remove to make the rest of the intervals non-overlapping.
 * @param {number[][]} intervals
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(N)
var eraseOverlapIntervals = function (intervals) {

    intervals.sort((a, b) => a[1] - b[1]);
    
    let result = 0;

    let stack = [intervals[0]];

    for(let i = 1;i < intervals.length; i++) {
        let [prevStart, prevEnd] = stack[stack.length - 1];
        let [currStart, currEnd] = intervals[i];

        if(prevEnd <= currStart) {
            stack.push(intervals[i]);
        } else {
            result++;
        }
    }

    return result;

};

module.exports = eraseOverlapIntervals;