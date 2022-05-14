const maxCompare = (a, b) => {
    return a - b;
}

class MaxHeap {
    constructor(maxCompare) {
        this.maxHeap = [];
        this.compare = maxCompare;
    }

    insert(val) {
        this.maxHeap.push(val);
        this.maxHeap.sort(this.compare);
    }

    extract() {
        return this.maxHeap.pop();
    }

    peek() {
        return this.maxHeap[this.maxHeap.length - 1];
    }

    get size() {
        return this.maxHeap.length;
    }
}

class MinHeap {
    constructor(minCompare) {
        this.minHeap = [];
        this.compare = minCompare;
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

var MedianFinder = function() {
    this.maxHeapStart = new MaxHeap(maxCompare);
    this.minHeapEnd = new MinHeap(maxCompare);
};

/** 
 * @param {number} num
 * @return {void}
 */
//Adding/ removing number to maxHeap or minHeap is O(logN)
MedianFinder.prototype.addNum = function(num) {
    
    this.maxHeapStart.insert(num);

    if(this.maxHeapStart.peek() >= this.minHeapEnd.peek()) {
        this.minHeapEnd.insert(this.maxHeapStart.extract());
    }

    if (this.maxHeapStart.size > this.minHeapEnd.size + 1) {
        this.minHeapEnd.insert(this.maxHeapStart.extract());
    }

    if (this.minHeapEnd.size > this.maxHeapStart.size + 1) {
        this.maxHeapStart.insert(this.minHeapEnd.extract());
    }
};

/**
 * @return {number}
 */
//Finding number to maxHeap or minHeap is O(1)
MedianFinder.prototype.findMedian = function() {

    if(this.maxHeapStart.size > this.minHeapEnd.size) {
        return this.maxHeapStart.peek();
    } else if (this.maxHeapStart.size < this.minHeapEnd.size) {
        return this.minHeapEnd.peek();
    } else {
        return ((this.maxHeapStart.peek() + this.minHeapEnd.peek())/2);
    }
}; 

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

module.exports = MedianFinder;
