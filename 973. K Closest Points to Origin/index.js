/**
 * @author maneeshavenigalla
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an 
 * integer k, return the k closest points to the origin (0, 0). The distance between two points on 
 * the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2). You may return the
 * answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// Time complexity - O(N * log N)
// Space complexity - O(N)
var kClosest = function (points, k) {
    let distanceObj = getDistance(points);

    let result = Object.keys(distanceObj).sort((a, b) => {
        if (distanceObj[a] == distanceObj[b]) {
            return a > b ? 1 : -1;
        }
        return distanceObj[a] - distanceObj[b]
    }).slice(0, k);

    return result.map(point => point.split(',').map(val => parseInt(val)));
};

const getDistance = (points) => {
    let distanceObj = {};

    for (const point of points) {
        distanceObj[point] = Math.sqrt(point[0] ** 2 + point[1] ** 2);
    }

    return distanceObj;
}

const compare = (a, b) => {
    if (a[1] == b[1]) {
        if (a[0] == b[0]) {
            return 0;
        } else if (a[0] < b[0]) {
            return 1;
        }
        return -1;
    }

    return a[1] - b[1];
}

class Heap {
    constructor(compare) {
        this.compareFunc = compare;
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heap.sort(this.compareFunc);
    }

    extract() {
        return this.heap.pop();
    }

    peek() {
        return this.heap[0];
    }

    get size() {
        return this.heap.length;
    }
}

// Time complexity - O(N * log K)
// Space complexity - O(N)
var kClosest = function (points, k) {

    let distanceObj = getDistance(points);
    let minHeap = new Heap(compare);

    for (const point in distanceObj) {
        let tuple = [point, distanceObj[point]];
        minHeap.insert(tuple);

        if (minHeap.size > k) {
            minHeap.extract();
        }
    }

    let result = [];

    while (minHeap.size > 0) {
        result.unshift(minHeap.extract()[0].split(',').map(val => parseInt(val)));
    }

    return result;
}

// Time complexity - O(N * log N)
// Space complexity - O(1)
var kClosest = function (points, k) {
    return points.sort((a, b) => a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1]).slice(0, k);
}

module.exports = kClosest;