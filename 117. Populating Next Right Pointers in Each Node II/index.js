/**
 * @author maneeshavenigalla
 * Populate each next pointer to point to its next right node. If there is no next right node, the next
 * pointer should be set to NULL. Initially, all next pointers are set to NULL.
 * @param {Node} root
 * @return {Node}
 */
// Time complexity - O(N + E)
// Space complexity - O(N)
 var connect = function(root) {
    if(!root) {
        return root;
    }

    let stack = [root];

    while(stack.length) {
        let level = [];
        let size = stack.length;
        for(let i = 0; i < size; i++) {
            let node = stack.shift();
            node.next = stack[0] || null;

            if(node.left) {
                level.push(node.left);
            }

            if(node.right) {
                level.push(node.right);
            }
        }

        stack = level;
    }

    return root; 
};

module.exports = connect;