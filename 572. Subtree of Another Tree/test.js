const isSubtree = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let root1 = new TreeNode(3);
    root1.left = new TreeNode(4);
    root1.right = new TreeNode(5);
    root1.left.left = new TreeNode(1);
    root1.left.right = new TreeNode(2);

    let root2 = new TreeNode(4);
    root2.left = new TreeNode(1);
    root2.right = new TreeNode(2);
    expect(isSubtree(root1, root2)).toBe(true);

    let root3 = new TreeNode(3);
    root3.left = new TreeNode(4);
    root3.right = new TreeNode(5);
    root3.left.left = new TreeNode(1);
    root3.left.right = new TreeNode(2);
    root3.left.right.left = new TreeNode(0);

    let root4 = new TreeNode(4);
    root4.left = new TreeNode(1);
    root4.right = new TreeNode(2);
    expect(isSubtree(root3, root4)).toBe(false);
});