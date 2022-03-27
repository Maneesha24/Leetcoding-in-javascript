/**
 * @author maneeshavenigalla
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf
 * path such that adding up all the values along the path equals targetSum. A leaf is a node with no children.
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var hasPathSum = function (root, targetSum) {

    const traverse = (node, currentSum) => {
        if(!node) {
            return false;
        }

        currentSum += node.val;

        if(!node.left && !node.right) {
            return currentSum == targetSum;
        }

        return traverse(node.left, currentSum) || traverse(node.right, currentSum)
    }

    return traverse(root, 0);
};

module.exports = hasPathSum;