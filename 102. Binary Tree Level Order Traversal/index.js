/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the level order traversal
 * of its nodes' values. (i.e., from left to right, level by level).
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Time complexity - O(N + E)
// Space complexity - O(N)
 var levelOrder = function(root) {
    
    let result = [];

    if(!root) {
        return result;
    }

    let stack = [root];

    while(stack.length) {
        let level = [];
        let size = stack.length;

        for(let i = 0; i < size; i++) {
            let node = stack.shift();

            if(node.left) {
                stack.push(node.left);
            }

            if(node.right) {
                stack.push(node.right);
            }

            level.push(node.val);
        }
        result.push(level);
    }

    return result;
};

module.exports = levelOrder;