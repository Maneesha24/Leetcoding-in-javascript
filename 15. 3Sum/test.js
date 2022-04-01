const threeSum = require('./index.js');

test('should pass the test cases', () => {
    expect(threeSum([-1,0,1,2,-1,-4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
    expect(threeSum([])).toStrictEqual([]);
    expect(threeSum([0])).toStrictEqual([]);
});