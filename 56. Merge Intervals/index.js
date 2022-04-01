/**
 * @author maneeshavenigalla
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping
 * intervals, and return an array of the non-overlapping intervals that cover all the
 * intervals in the input.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// Time complexity - O(N * logN)
// Space complexity - O(N)
var merge = function (intervals) {
    
    intervals.sort((a, b) => a[0] - b[0]);

    let stack = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        let [prevStart, prevEnd] = stack[stack.length - 1];

        if(prevEnd >= intervals[i][0]) {
            stack.pop();
            stack.push([prevStart, Math.max(prevEnd, intervals[i][1])])
        } else {
            stack.push(intervals[i]);
        }
    }

    return stack;
};

module.exports = merge;