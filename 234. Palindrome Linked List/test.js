const isPalindrome = require('./index.js');
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
    head1.next.next.next = new ListNode(3);
    head1.next.next.next.next = new ListNode(2);
    head1.next.next.next.next.next = new ListNode(1);
    expect(isPalindrome(head1)).toBe(true);
    
    let head2 = new ListNode(1);
    head2.next = new ListNode(2);
    expect(isPalindrome(head2)).toBe(false);

    let head3 = new ListNode(1);
    expect(isPalindrome(head3)).toBe(true);

    let head4 = new ListNode(0);
    head4.next = new ListNode(0);
    expect(isPalindrome(head4)).toBe(true);

    let head5 = new ListNode(0);
    head5.next = new ListNode(2);
    head5.next.next = new ListNode(2);
    head5.next.next.next = new ListNode(1);
    expect(isPalindrome(head5)).toBe(false);

    let head6 = new ListNode(1);
    head6.next = new ListNode(2);
    head6.next.next = new ListNode(2);
    head6.next.next.next = new ListNode(1);
    expect(isPalindrome(head6)).toBe(true);
});