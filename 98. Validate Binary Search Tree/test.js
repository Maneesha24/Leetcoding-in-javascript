const isValidBST = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
  let root1 = new TreeNode(2);
  root1.left = new TreeNode(1);
  root1.right = new TreeNode(3);
  expect(isValidBST(root1)).toBe(true);
});