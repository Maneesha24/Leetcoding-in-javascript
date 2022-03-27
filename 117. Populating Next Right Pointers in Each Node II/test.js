const connect = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(7);
    expect(connect(root)).toEqual({"left": {"left": {"left": null, "next": {"left": null, "next": {"left": null, "next": null, "right": null, "val": 7}, "right": null, "val": 5}, "right": null, "val": 4}, "next": {"left": null, "next": null, "right": {"left": null, "next": null, "right": null, "val": 7}, "val": 3}, "right": {"left": null, "next": {"left": null, "next": null, "right": null, "val": 7}, "right": null, "val": 5}, "val": 2}, "next": null, "right": {"left": null, "next": null, "right": {"left": null, "next": null, "right": null, "val": 7}, "val": 3}, "val": 1});

    let root2 = new TreeNode();
    expect(connect(root2)).toEqual({"left": null, "next": null, "right": null, "val": undefined});
});