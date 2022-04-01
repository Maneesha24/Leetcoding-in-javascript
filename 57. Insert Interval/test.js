const insert = require('./index.js');

test('should pass the test cases', () => {
    expect(insert(intervals = [[1,3],[6,9]], newInterval = [2,5])).toStrictEqual([[1,5],[6,9]]);
    expect(insert(intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8])).toStrictEqual([[1,2],[3,10],[12,16]]);
});