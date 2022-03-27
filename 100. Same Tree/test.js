const isSameTree = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(3);
    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    expect(isSameTree(root1, root2)).toBe(true);

    let root3 = new TreeNode(1);
    root3.left = new TreeNode(2);
    let root4 = new TreeNode(1);
    root4.right = new TreeNode(2);
    expect(isSameTree(root3, root4)).toBe(false);

    let root5 = new TreeNode(1);
    root5.left = new TreeNode(2);
    root5.right = new TreeNode(1);

    let root6 = new TreeNode(1);
    root6.left = new TreeNode(1);
    root6.right = new TreeNode(2);
    expect(isSameTree(root5, root6)).toBe(false);
});