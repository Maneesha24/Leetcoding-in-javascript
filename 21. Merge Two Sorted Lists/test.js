const mergeTwoLists = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
    let head1 = new ListNode(1);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(4);

    let head2 = new ListNode(1);
    head2.next = new ListNode(3);
    head2.next.next = new ListNode(4);
    expect(mergeTwoLists(head1, head2)).toEqual({"next": {"next": {"next": {"next": {"next": {"next": null, "val": 4}, "val": 4}, "val": 3}, "val": 2}, "val": 1}, "val": 1});

    let head3 = new ListNode();
    let head4 = new ListNode();
    expect(mergeTwoLists(head3, head4)).toEqual({"next": {"next": null, "val": undefined}, "val": undefined});

    let head5 = new ListNode();
    let head6 = new ListNode(0);
    expect(mergeTwoLists(head5, head6)).toEqual({"next": {"next": null, "val": 0}, "val": undefined});
});