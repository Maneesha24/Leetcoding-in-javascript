/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the average value of the nodes on each
 * level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 * @param {TreeNode} root
 * @return {number[]}
 */
// Time complexity - O(N + E) - Nodes and edges
// Space complexity - O(N)
var averageOfLevels = function (root) {

    let result = [];

    if (!root) {
        return result;
    }

    let stack = [root];

    while (stack.length) {
        let size = stack.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            let node = stack.shift();

            if (node.left) {
                stack.push(node.left);
            }

            if (node.right) {
                stack.push(node.right);
            }

            level.push(node.val);
        }

        result.push(level.reduce((p, c) => (p + c), 0) / level.length);
    }

    return result;
};

module.exports = averageOfLevels;