const removeNthFromEnd = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
    let head1 = new ListNode(1);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(3);
    head1.next.next.next = new ListNode(4);
    head1.next.next.next.next = new ListNode(5);
    expect(removeNthFromEnd(head1, 2)).toEqual({"next": {"next": {"next": {"next": null, "val": 5}, "val": 3}, "val": 2}, "val": 1});

    let head2 = new ListNode(1);
    expect(removeNthFromEnd(head2, 1)).toEqual(null);

    let head3 = new ListNode(1);
    head3.next = new ListNode(2);
    expect(removeNthFromEnd(head3, 1)).toEqual({"next": null, "val": 1});
});