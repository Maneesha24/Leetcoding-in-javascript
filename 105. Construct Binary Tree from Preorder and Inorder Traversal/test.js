const buildTree = require('./index.js');

test('should pass the test cases', () => {
    expect(buildTree([3,9,20,15,7], [9,3,15,20,7])).toEqual({"left": {"left": null, "right": null, "val": 9}, "right": {"left": {"left": null, "right": null, "val": 15}, "right": {"left": null, "right": null, "val": 7}, "val": 20}, "val": 3});
    expect(buildTree([-1],[-1])).toEqual({"left": null, "right": null, "val": -1});
});