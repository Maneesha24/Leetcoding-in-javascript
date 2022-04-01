const oddEvenList = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    expect(oddEvenList(head)).toEqual({ "next": { "next": { "next": { "next": { "next": null, "val": 4 }, "val": 2 }, "val": 5 }, "val": 3 }, "val": 1 });

    let head2 = new ListNode(2);
    head2.next = new ListNode(1);
    head2.next.next = new ListNode(3);
    head2.next.next.next = new ListNode(5);
    head2.next.next.next.next = new ListNode(6);
    head2.next.next.next.next.next = new ListNode(4);
    head2.next.next.next.next.next.next = new ListNode(7);
    expect(oddEvenList(head2)).toEqual({ "next": { "next": { "next": { "next": { "next": { "next": { "next": null, "val": 4 }, "val": 5 }, "val": 1 }, "val": 7 }, "val": 6 }, "val": 3 }, "val": 2 });
});