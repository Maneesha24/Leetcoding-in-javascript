/**
 * @author maneeshavenigalla
 * Given the head of a singly linked list, return the middle node of the linked list. If there 
 * are two middle nodes, return the second middle node.
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time complexity - O(N)
// Space complexity - O(1)
var middleNode = function (head) {

    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

module.exports = middleNode;