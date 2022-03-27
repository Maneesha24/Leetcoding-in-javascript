/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number
 * of nodes along the longest path from the root node down to the farthest leaf node.
 * @param {TreeNode} root
 * @return {number}
 */
// Time complexity - O(N + E) - Nodes and edges
// Space complexity - O(N)
 var maxDepth = function(root) {
    let depth = 0;

    if (!root) {
        return result;
    }

    let queue = [root];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        depth++;
    }

    return depth;  
};


module.exports = maxDepth;