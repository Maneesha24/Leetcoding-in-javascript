const isSubtree = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(3);
    root1.right = new TreeNode(2);
    root1.left.left = new TreeNode(5);

    let root2 = new TreeNode(2);
    root2.left = new TreeNode(1);
    root2.right = new TreeNode(3);
    root2.left.right = new TreeNode(4);
    root2.right.right = new TreeNode(7);
    expect(isSubtree(root1, root2)).toEqual({"left": {"left": {"left": null, "right": null, "val": 5}, "right": {"left": null, "right": null, "val": 4}, "val": 4}, "right": {"left": null, "right": {"left": null, "right": null, "val": 7}, "val": 5}, "val": 3});

    let root3 = new TreeNode(1);

    let root4 = new TreeNode(1);
    root4.left = new TreeNode(2);
    expect(isSubtree(root3, root4)).toEqual({"left": {"left": null, "right": null, "val": 2}, "right": null, "val": 2});
});