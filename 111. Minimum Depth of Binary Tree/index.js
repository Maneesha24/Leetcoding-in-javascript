/**
 * @author maneeshavenigalla
 * Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the
 * shortest path from the root node down to the nearest leaf node.
 * @param {TreeNode} root
 * @return {number}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var minDepth = function (root) {

    if(!root) {
        return 0;
    }

    let result;

    const minHeight = (root, depth) => {
        if(!root.left && !root.right){
            result = Math.min(result || depth, depth)
        }
        if(root.left) {
            minHeight(root.left, depth + 1);
        }
        if(root.right) {
            minHeight(root.right, depth + 1);
        }
    }

    minHeight(root, 1);
    return result;
};

module.exports = minDepth;