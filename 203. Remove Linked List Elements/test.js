const removeElements = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass the test cases', () => {
    let head1 = new ListNode(1);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(6);
    head1.next.next.next = new ListNode(3);
    head1.next.next.next.next = new ListNode(4);
    head1.next.next.next.next.next = new ListNode(5);
    head1.next.next.next.next.next.next = new ListNode(6);
    expect(removeElements(head1, 6)).toEqual({ "next": { "next": { "next": { "next": { "next": null, "val": 5 }, "val": 4 }, "val": 3 }, "val": 2 }, "val": 1 });


    let head2 = new ListNode(7);
    head2.next = new ListNode(7);
    head2.next.next = new ListNode(7);
    head2.next.next.next = new ListNode(7);
    expect(removeElements(head2, 7)).toEqual(null);
});