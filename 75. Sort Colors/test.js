const sortColors = require('./index.js');

test('should pass the test cases', () => {
    expect(sortColors([2,0,2,1,1,0])).toStrictEqual([0,0,1,1,2,2]);
    expect(sortColors([2,0,1])).toStrictEqual([0,1,2]);
    expect(sortColors([0])).toStrictEqual([0]);
    expect(sortColors([1])).toStrictEqual([1]);
});