const lowestCommonAncestor = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let root1 = new TreeNode(6);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(8);
    root1.left.left = new TreeNode(0);
    root1.left.right = new TreeNode(4);
    root1.left.right.left = new TreeNode(3);
    root1.left.right.right = new TreeNode(5);
    root1.right.left = new TreeNode(7);
    root1.right.right = new TreeNode(9);

    let p1 =new TreeNode(2);
    p1.left = new TreeNode(0);
    p1.right = new TreeNode(4);
    p1.right.left = new TreeNode(3);
    p1.right.right = new TreeNode(5);

    let q1 = new TreeNode(8);
    q1.left = new TreeNode(7);
    q1.right = new TreeNode(9);
    expect(lowestCommonAncestor(root1, p1, q1)).toEqual({"left": {"left": {"left": null, "right": null, "val": 0}, "right": {"left": {"left": null, "right": null, "val": 3}, "right": {"left": null, "right": null, "val": 5}, "val": 4}, "val": 2}, "right": {"left": {"left": null, "right": null, "val": 7}, "right": {"left": null, "right": null, "val": 9}, "val": 8}, "val": 6});
});