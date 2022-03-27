const lowestCommonAncestor = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let root3 = new TreeNode(1);
    root3.left = new TreeNode(2);

    let p3 = new TreeNode(1);
    p3.left = new TreeNode(2);

    let q3 = new TreeNode(1);
    expect(lowestCommonAncestor(root3, p3, q3)).toEqual(null);
});