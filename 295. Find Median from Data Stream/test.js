const MedianFinder = require('./index');

test('should pass the test cases', () => {
    let medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    expect(medianFinder.findMedian()).toBe(1.5);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2.0);
});