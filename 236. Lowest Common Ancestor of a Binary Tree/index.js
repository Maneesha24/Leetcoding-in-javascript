/**
 * @author maneeshavenigalla
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. According to
 * the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the
 * lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Time complexity - O(N + E)
// Space complexity - O(1)
 var lowestCommonAncestor = function(root, p, q) {

    if(!root || root == p || root == q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);


    if(!left) {
        return right;
    }

    if(!right) {
        return left;
    }

    return root;
    
};

module.exports = lowestCommonAncestor;