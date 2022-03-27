const minDepth = require('./index.js');
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
  expect(minDepth(root1)).toBe(2);


  let root2 = new TreeNode(2);
  root2.left = new TreeNode(null);
  root2.right = new TreeNode(3);
  root2.left.left = new TreeNode(null);
  root2.left.right = new TreeNode(4);
  root2.right.left = new TreeNode(null);
  root2.right.right = new TreeNode(5);
  expect(minDepth(root2)).toBe(3);
});