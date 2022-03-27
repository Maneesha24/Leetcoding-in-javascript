const diameterOfBinaryTree = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass all test conditions', () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(3);
    root1.left.left = new TreeNode(4);
    root1.left.right = new TreeNode(5);
    expect(diameterOfBinaryTree(root1)).toBe(3);

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    expect(diameterOfBinaryTree(root2)).toBe(1);
});