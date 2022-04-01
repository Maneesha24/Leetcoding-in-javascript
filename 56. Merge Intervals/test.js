const merge = require('./index.js');

test('should pass the test cases', () => {
    expect(merge([[1,3],[2,6],[8,10],[15,18]])).toStrictEqual([[1,6],[8,10],[15,18]]);
    expect(merge([[1,4],[4,5]])).toStrictEqual([[1,5]]);
});