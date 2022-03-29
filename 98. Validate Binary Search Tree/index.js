/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: 
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * @param {TreeNode} root
 * @return {boolean}
 */
// Time complexity - O(N + E)
// Space complexity - O(1)
 var isValidBST = function(root) {
    
    const traverse = (node, min, max) => {
        if(!node) {
            return true;
        }

        if((min != null && node.val <= min) || (max != null && node.val >= max)) {
            return false;
        }

        return traverse(node.left, min, node.val) && traverse(node.right, node.val, max);
    }

    return traverse(root, null, null);
};

module.exports = isValidBST;