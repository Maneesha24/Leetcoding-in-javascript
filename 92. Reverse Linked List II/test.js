const reverseBetween = require('./index.js');
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
    expect(reverseBetween(head, 2, 4)).toEqual(1);
    
    let head2 = new ListNode(5);
    expect(reverseBetween(head2, 1, 1)).toEqual(1);
});