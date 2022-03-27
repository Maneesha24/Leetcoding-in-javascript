/**
 * @author maneeshavenigalla
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root 
 * with the same structure and node values of subRoot and false otherwise. A subtree of a binary 
 * tree tree is a tree that consists of a node in tree and all of this node's descendants. The 
 * tree could also be considered as a subtree of itself.
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// Time complexity - O(m * n)
// Space complexity - O(1)
var isSubtree = function (root, subRoot) {

    const sameTree = (p, q) => {

        if(!p && !q) {
            return true;
        }
    
        if(!p || !q || p.val != q.val) {
            return false;
        }
    
        return sameTree(p.left, q.left) && sameTree(p.right, q.right);
    }

    const traverse = (node) => {
        
        if(!node) {
            return false;
        }

        if(sameTree(node, subRoot)) {
            return true;
        }

        return traverse(node.left, subRoot) || traverse(node.right, subRoot);;
    }

    return traverse(root);
};

module.exports = isSubtree;