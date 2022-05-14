const kthSmallest = require('./index.js');
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

test('should pass the test cases', () => {
    let head1 = new TreeNode(3);
    head1.left = new TreeNode(1);
    head1.right = new TreeNode(4);
    head1.left.right = new TreeNode(2);
    expect(kthSmallest(head1, 1)).toBe(1);
    
    // let head2 = new TreeNode(2);
    // head2.left = new TreeNode(1);
    // head2.right = new TreeNode(3);
    // expect(kthSmallest(head2)).toBe(3);

    // let head3 = new TreeNode();
    // expect(kthSmallest(head3)).toBe({"left": null, "right": null, "val": undefined});

    // let head4 = new TreeNode(1);
    // head4.left = new TreeNode(2);
    // expect(kthSmallest(head4)).toBe({"left": null, "right": {"left": null, "right": null, "val": 2}, "val": 1});
});