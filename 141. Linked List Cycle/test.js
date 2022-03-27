const hasCycle = require('./index.js');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

test('should pass all test conditions', () => {

  let head1 = new ListNode(5);
  head1.next = new ListNode(4);
  head1.next.next = new ListNode(3);
  head1.next.next.next = new ListNode(2);
  head1.next.next.next.next = new ListNode(2);
  expect(hasCycle(head1)).toBe(false);

  let head2 = new ListNode(1);
  head2.next = new ListNode(2);
  expect(hasCycle(head2)).toBe(false);
});