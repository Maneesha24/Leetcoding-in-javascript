/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, imagine yourself standing on the right side of
 * it, return the values of the nodes you can see ordered from top to bottom.
 * @param {TreeNode} root
 * @return {number[]}
 */
// Time complexity - O(N + E)
// Space complexity - O(N)
var rightSideView = function (root) {
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

            if (i == size - 1) {
                result.push(node.val);
            }

            if (node.left) {
                stack.push(node.left);
            }

            if (node.right) {
                stack.push(node.right);
            }
        }
    }

    return result;
};

module.exports = rightSideView;