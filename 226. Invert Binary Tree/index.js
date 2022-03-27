/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, invert the tree, and return its root.
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var invertTree = function (root) {

    if(root) {
        let temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
    }

    return root;
};

// Time complexity - O(N * E)
// Space complexity - O(N)
var invertTree = function (root) {

    let queue = [];

    if(root) {
        queue.push(root);
    }

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            [node.left, node.right] = [node.right, node.left];

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

    }

    return root;
};

module.exports = invertTree;