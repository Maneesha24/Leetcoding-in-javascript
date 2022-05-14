/**
 * @author maneeshavenigalla
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, 
 * return null. There is a cycle in a linked list if there is some node in the list that can be reached
 * again by continuously following the next pointer. Internally, pos is used to denote the index of the 
 * node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos
 * is not passed as a parameter. Do not modify the linked list.
 * @param {ListNode} head
 * @return {boolean}
 */
// Time complexity - O(N)
// Space complexity - O(N)
var detectCycle = function (head) {

    let nodeSet = new Set();
    let current = head;

    while(current) {
        if(nodeSet.has(current)) {
            return current;
        } else {
            nodeSet.add(current);
        }
        current = current.next;
    }

    return null;
};

// Time complexity - O(N)
// Space complexity - O(1)
var detectCycle = function (head) {

    if(!head) {
        return null;
    }

    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) {
            while(head !== fast) {
                head = head.next;
                fast = fast.next;
            }
            return head;
        }
    }
    
    return null;
};

module.exports = detectCycle;