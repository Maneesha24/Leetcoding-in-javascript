/**
 * @author maneeshavenigalla
 * Given an integer array nums and an integer k, return the kth largest element in the 
 * array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    let heap = [null, ...nums];
    maxHeapify(heap);
    let max = 0;

    for(let i = 0; i < k; i++) {
        max = removeMax(heap);
    }

    return max;
};

const maxHeapify = (heap) => {

    let i = heap.length - 1;

    while (i > 1) {
        let parent = Math.floor(i / 2);

        if (heap[i] > heap[parent]) {
            [heap[i], heap[parent]] = [heap[parent], heap[i]]
        }
        i--;
    }
}

const removeMax = (heap) => {

    let max = heap[1];
    [heap[1], heap[heap.length - 1]] = [heap[heap.length - 1], heap[1]];
    heap.pop();
    maxHeapify(heap);

    return max;
}

module.exports = findKthLargest;