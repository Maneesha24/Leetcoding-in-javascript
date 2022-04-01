const sortList = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
    let head1 = new ListNode(4);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(1);
    head1.next.next.next = new ListNode(3);
    expect(sortList(head1)).toEqual({"next": {"next": {"next": {"next": null, "val": 4}, "val": 3}, "val": 2}, "val": 1});

    let head2 = new ListNode(1);
    expect(sortList(head2)).toEqual({"next": null, "val": 1});

    let head3 = new ListNode(1);
    head3.next = new ListNode(2);
    expect(sortList(head3)).toEqual({"next": {"next": null, "val": 2}, "val": 1});
});