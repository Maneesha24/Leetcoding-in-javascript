/**
 * @author maneeshavenigalla
 * You are given a list of songs where the ith song has a duration of time[i] seconds. Return the 
 * number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, 
 * we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.
 * @param {number[]} time
 * @return {number}
 */
// Time complexity - O(N ^ 2)
// Space complexity - O(1)
 var numPairsDivisibleBy60 = function(time) {
    
    let result = 0;

    for(let i = 0; i < time.length; i++) {
        for(let j = i + 1;j < time.length; j++) {
            if((nums[i] + nums[j])%60 == 0) {
                result++;
            }
        }
    }

    return result;
};

// Time complexity - O(N)
// Space complexity - O(1)
var numPairsDivisibleBy60 = function(time) {
    
    let songArr = new Array(60).fill(0);

    let result = 0;
    for (let i = 0; i < time.length; i++) {

        let val = time[i] % 60;
        console.log("time =", time[i], val)
        result += songArr[(60 - val) % 60];
        songArr[val] += 1;
    }
    // return result;
};

// [30,20,150,100,40]
module.exports = numPairsDivisibleBy60;