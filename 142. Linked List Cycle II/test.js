const detectCycle = require('./index.js');
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
  head1.next.next.next.next = new ListNode(1);
  expect(detectCycle(head1)).toBe(null);

  let head2 = new ListNode(1);
  head2.next = new ListNode(2);
  expect(detectCycle(head2)).toBe(null);
});