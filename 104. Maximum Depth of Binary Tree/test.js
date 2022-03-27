const maxDepth = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
  let root1 = new TreeNode(3);
  root1.left = new TreeNode(9);
  root1.right = new TreeNode(20);
  root1.right.left = new TreeNode(15);
  root1.right.right = new TreeNode(7);
  expect(maxDepth(root1)).toBe(3);


  let root2 = new TreeNode(1);
  root2.right = new TreeNode(2);
  expect(maxDepth(root2)).toBe(2);
});