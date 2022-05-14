/**
 * @author maneeshavenigalla
 * Given an integer array nums and an integer k, return the k most frequent 
 * elements. You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const compare = (a, b) => {
    if(a[1] == b[1]) {
        if(a[0] == b[0]) {
            return 0;
        } else if(a[0] < b[0]) {
            return 1;
        } else {
            return -1;
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
        return this.minHeap.pop();
    }

    peek() {
        return this.minHeap[0];
    }
    
    get size() {
        return this.minHeap.length;
    }
}

var topKFrequent = function (nums, k) {

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
        
        if(minHeap.size > k) {
            minHeap.extract();
        }
    }
    
    let result = [];
    
    while(minHeap.size > 0) {
        result.unshift(parseInt(minHeap.extract()[0]));
    }

    return result;

};

module.exports = topKFrequent;