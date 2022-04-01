/**
 * @author maneeshavenigalla
 * Given an array of strings words and an integer k, return the k most frequent strings. Return the 
 * answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by 
 * their lexicographical order.
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// Time complexity - O(N * log N)
// Space complexity - O(N)
 var topKFrequent = function(words, k) {

    let wordObj = getFrequency(words);

    return Object.keys(wordObj).sort((a, b) => {
        if(wordObj[a] == wordObj[b]) {
            return a > b ? 1 : -1;
        }
        return wordObj[b] - wordObj[a]
    }).slice(0, k);
};

const getFrequency = (words) => {
    let wordObj = {};

    for(const word of words) {
        if(word in wordObj) {
            wordObj[word] += 1;
        } else {
            wordObj[word] = 1;
        }
    }

    return wordObj;
}

class Heap {
    constructor(compareFunc) {
        this.compareFunc = compareFunc;
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.heap.sort(this.compareFunc);
    }
    
    extract() {
        return this.heap.shift();
    }
    
    peek() {
        return this.heap[0];
    }
    
    get size() {
        return this.heap.length;
    }
}

const compareFunc = (a, b) => {
    if(a[1] === b[1]) {
        if(a[0] === b[0]) return 0;
        if(a[0] < b[0]) return 1;
        return -1;
    }
    
    return a[1] - b[1];
};

// Time complexity - O(N * log k)
// Space complexity - O(N)
var topKFrequent = function(words, k) {

    const wordObj = getFrequency(words);
    const minHeap = new Heap(compareFunc);

    for(const word in wordObj) {
        const tuple = [word, wordObj[word]];
        minHeap.insert(tuple);

        if(minHeap.size > k) minHeap.extract();
    }
    
    const ans = [];
    while(minHeap.size > 0) {
        ans.unshift(minHeap.extract()[0]);
    }
          
    return ans;
};
module.exports = topKFrequent;