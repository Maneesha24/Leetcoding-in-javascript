const rightSideView = require('./index.js');
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
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(4);
    expect(rightSideView(root)).toStrictEqual([1,3,4]);

    let root2 = new TreeNode(1);
    root2.right = new TreeNode(3);
    expect(rightSideView(root2)).toStrictEqual([1,3]);

    let root4 = new TreeNode(1);
    root4.right = new TreeNode(2);
    expect(rightSideView(root4)).toStrictEqual([1,2]);
});