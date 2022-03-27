/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the zigzag level order traversal of its 
 * nodes' values. (i.e., from left to right, then right to left for the next level 
 * and alternate between).
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Time complexity - O(N + E)
// Space complexity - O(N)
var zigzagLevelOrder = function (root) {
    let result = [];

    if (!root) {
        return result;
    }

    let stack = [root];

    while (stack.length) {
        let level = [];
        let size = stack.length;

        for (let i = 0; i < size; i++) {
            let node = stack.shift();

            if (node.left) {
                stack.push(node.left);
            }

            if (node.right) {
                stack.push(node.right);
            }

            result.length % 2 == 0 ? level.push(node.val)
                : level.unshift(node.val);
        }

        result.push(level);
    }

    return result;
};

module.exports = zigzagLevelOrder;