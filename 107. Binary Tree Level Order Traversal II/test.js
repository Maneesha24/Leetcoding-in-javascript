const levelOrder = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass all test conditions', () => {
    let root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    expect(levelOrder(root)).toStrictEqual([[15,7],[9,20],[3]]);

    let root2 = new TreeNode(1);
    expect(levelOrder(root2)).toStrictEqual([[1]]);
});