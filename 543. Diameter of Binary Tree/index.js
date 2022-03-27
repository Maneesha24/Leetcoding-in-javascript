/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a 
 * binary tree is the length of the longest path between any two nodes in a tree. This path may or may
 * not pass through the root. The length of a path between two nodes is represented by the number of
 * edges between them.
 * @param {TreeNode} root
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var diameterOfBinaryTree = function (root) {

    let max = 0;

    const traverse = (node) => {
        if(!node) {
            return 0;
        }

        let left = traverse(node.left);
        let right = traverse(node.right);

        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }

    traverse(root);
    return max;
};

module.exports = diameterOfBinaryTree;