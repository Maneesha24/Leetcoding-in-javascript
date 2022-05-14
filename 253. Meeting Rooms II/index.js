/**
 * @author maneeshavenigalla
 * Given an array of meeting time intervals consisting of start and end times 
 * [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.)
 * @param {number[][]} intervals
 * @returns {number}
 */
// Time complexity - O(N * logN)
// Space complexity - O(1)
var minMeetingRooms = (intervals) => {

    intervals.sort((a, b) => a[0] - b[0]);

    let end = [...intervals].sort((a, b) => a[1] - b[1]);

    let result = 0;

    let j = 0;

    for(let i = 0; i < intervals.length; i++) {
        if(intervals[i][0] < end[j][1]) {
            result++;
        } else {
            j++;
        }
    }


    return result;
}

module.exports = minMeetingRooms;
