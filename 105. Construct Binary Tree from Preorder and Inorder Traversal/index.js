/**
 * @author maneeshavenigalla
 * Given two integer arrays preorder and inorder where preorder is the preorder 
 * traversal of a binary tree and inorder is the inorder traversal of the same tree,
 * construct and return the binary tree.
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var buildTree = function (preorder, inorder) {

    let inorderObj = {};

    inorder.forEach((val, index) => inorderObj[val] = index);

    const traverse = (left, right) => {
        if (left > right) {
            return null;
        }

        let newNode = new TreeNode(preorder.shift());
        newNode.left = traverse(left, inorderObj[newNode.val] - 1);
        newNode.right = traverse(inorderObj[newNode.val] + 1, right);
        return newNode;
    }

    return traverse(0, inorder.length - 1);
};

module.exports = buildTree;