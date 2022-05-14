/**
 * @author maneeshavenigalla
 * Given the root of a binary search tree, and an integer k, return the kth smallest 
 * value (1-indexed) of all the values of the nodes in the tree.
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(N)
 var kthSmallest = function(root, k) {
    
    let result = [];

    const traverse = (node) => {

        if(result.length !== k) {
            if(node.left) {
                traverse(node.left);
            }
            result.push(node.val);

            if(node.right) {
                traverse(node.right);
            }
        }
    }

    traverse(root);
    return result[k - 1];
};

module.exports = kthSmallest;