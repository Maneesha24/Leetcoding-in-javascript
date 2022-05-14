/**
 * @author maneeshavenigalla
 * Given the head of a linked list, remove the nth node from the end of the
 * list and return its head.
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Time complexity - O(N)
// Space complexity - O(1)
 var removeNthFromEnd = function(head, n) {
    
    let current = head;
    let slow = head;

    while(n > 0) {
        slow = slow.next;
        n--;
    }

    while(slow && slow.next) {
        slow = slow.next;
        current = current.next;
    }

    if(!slow) {
        head = head.next
    } else {
        current.next = current.next.next;
    }

    return head;
};

module.exports = removeNthFromEnd;