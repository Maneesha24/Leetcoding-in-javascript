const { serialize, deserialize } = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);
    tree1.right.left = new TreeNode(4);
    tree1.right.right = new TreeNode(5);
    expect(deserialize(serialize(tree1))).toEqual({"left": {"left": null, "right": null, "val": "2"}, "right": {"left": {"left": null, "right": null, "val": "4"}, "right": {"left": null, "right": null, "val": "5"}, "val": "3"}, "val": "1"});
});