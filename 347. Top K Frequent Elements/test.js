const topKFrequent = require('./index.js');

test('should pass the test cases', () => {
    expect(topKFrequent(nums = [1,1,1,2,2,3], k = 2)).toStrictEqual([1,2]);
    expect(topKFrequent(nums = [1], k = 1)).toStrictEqual([1]);
});