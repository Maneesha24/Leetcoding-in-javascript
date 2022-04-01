/**
 * @author maneeshavenigalla
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the
 * start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an
 * interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into 
 * intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any 
 * overlapping intervals (merge overlapping intervals if necessary). Return intervals after the insertion.
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {

    if (intervals.length == 0) {
        return [ newInterval ];
    }

    let result = [];

    let flag = false;
    let index = 0;

    for(let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];

        if (newInterval[0] > interval[1]){
            result.push(interval);
        } else if (newInterval[1] < interval[0]){
            result.push(newInterval);
            flag = true;
            index = i;
            break;
        } else {
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        }
    }

    if(!flag) {
        result.push(newInterval);
        return result;
    } else {
        return result.concat(intervals.splice(index));
    }
};

module.exports = insert;