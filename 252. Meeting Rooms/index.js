/**
 * @author maneeshavenigalla
 * Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), determine 
 * if a person could attend all meetings.
 * @param {number[][]} rooms
 * @returns {Boolean}
 */
// Time complexity - O(N * logN)
// Space complexity - O(1)
var meetingRooms = (rooms) => {

    rooms.sort((a, b) => a[0] - b[0]);

    for(let i = 1; i < rooms.length; i++) {
        if(rooms[i - 1][1] > rooms[i][0]) {
            return false;
        }
    }
    
    return true;
}

module.exports = meetingRooms;
