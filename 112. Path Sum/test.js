const hasPathSum = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
  let root1 = new TreeNode(5);
  root1.left = new TreeNode(4);
  root1.right = new TreeNode(8);
  root1.left.left = new TreeNode(11);
  root1.left.left.left = new TreeNode(7);
  root1.left.left.right = new TreeNode(2);
  root1.right.left = new TreeNode(13);
  root1.right.right = new TreeNode(4);
  root1.right.right.right = new TreeNode(1);
  expect(hasPathSum(root1, 22)).toBe(true);


  let root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(3);
  expect(hasPathSum(root2, 5)).toBe(false);

  let root3 = new TreeNode();
  expect(hasPathSum(root3, 0)).toBe(false);
});