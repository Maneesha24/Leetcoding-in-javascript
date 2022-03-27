/**
 * @author maneeshavenigalla
 * You are given two binary trees root1 and root2.Imagine that when you put one of them to cover
 * the other, some nodes of the two trees are overlapped while the others are not. You need to merge
 * the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node
 * values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node
 * of the new tree. Return the merged tree.
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Time complexity - O(N)
// Space complexity - O(1)
var mergeTrees = function (root1, root2) {

    if (root1 && root2) {
        let mergedTree = new TreeNode(root1.val + root2.val);
        mergedTree.left = mergeTrees(root1.left, root2.left);
        mergedTree.right = mergeTrees(root1.right, root2.right);
        return mergedTree;
    }

    return root1 || root2;
};

module.exports = mergeTrees;