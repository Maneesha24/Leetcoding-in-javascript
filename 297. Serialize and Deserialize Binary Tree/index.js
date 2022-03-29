/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//  Serialization is the process of converting a data structure or object into a sequence of bits 
// so that it can be stored in a file or memory buffer, or transmitted across a network connection 
// link to be reconstructed later in the same or another computer environment.
/**
 * Encodes a tree to a single string.
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your 
 * serialization/deserialization algorithm should work. You just need to ensure that a binary tree can
 *  be serialized to a string and this string can be deserialized to the original tree structure.
 * @param {TreeNode} root
 * @return {string}
 */
 class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var serialize = function (root) {

    let result = '';

    const traverse = (node) => {
        if(!node) {
            result += "* ";
        } else {
            result += `${node.val} `;
            traverse(node.left);
            traverse(node.right);
        }
    }

    traverse(root);
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {

    let nodes = data.split(' ');

    const buildTree = () => {
        let node = nodes.shift();

        if(node == '*') {
            return null;
        } else {
            let newNode = new TreeNode(node);
            newNode.left = buildTree();
            newNode.right = buildTree();
            return newNode;
        }
    }

    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = { serialize, deserialize };
