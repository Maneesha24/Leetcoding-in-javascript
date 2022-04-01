/**
 * @author maneeshavenigalla
 * Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency 
 * of a character is the number of times it appears in the string. Return the sorted string. If there are
 * multiple answers, return any of them.
 * @param {string} s
 * @return {string}
 */

 const compare = (a, b) => {
    if(a[1] == b[1]) {
        if(a[0] == b[0]) {
            return 0;
        } else if(a[0] < b[0]) {
            return -1;
        } else {
            return 1;
        }
    }

    return b[1] - a[1];
}

class Heap {
    constructor(compareFunc) {
        this.compare = compareFunc;
        this.minHeap = [];
    }

    insert(val) {
        this.minHeap.push(val);
        this.minHeap.sort(this.compare);
    }

    extract() {
        return this.minHeap.shift();
    }

    peek() {
        return this.minHeap[0];
    }
    
    get size() {
        return this.minHeap.length;
    }
}

var frequencySort = function (nums) {

    let numObj = {};

    for(const num of nums) {
        if(num in numObj) {
            numObj[num] += 1
        } else {
            numObj[num] = 1
        }
    }

    let minHeap = new Heap(compare);
    
    for(const num in numObj) {
        let tuple = [num, numObj[num]];
        minHeap.insert(tuple);
    }
    
    let result = '';
    
    while(minHeap.size) {
        let [char, val] = minHeap.extract();
        result += char.repeat(val);
    }

    return result;

};

module.exports = frequencySort;