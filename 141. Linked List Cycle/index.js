/**
 * @author maneeshavenigalla
 * Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle
 * in a linked list if there is some node in the list that can be reached again by continuously following 
 * the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is 
 * connected to. Note that pos is not passed as a parameter. Return true if there is a cycle in the linked
 * list. Otherwise, return false.
 * @param {ListNode} head
 * @return {boolean}
 */
// Time complexity - O(N)
// Space complexity - O(N)
var hasCycle = function (head) {

    let nodeSet = new Set();
    let current = head;

    while(current) {
        if(nodeSet.has(current)) {
            return true;
        } else {
            nodeSet.add(current);
        }
        current = current.next;
    }

    return false;
};

// Time complexity - O(N)
// Space complexity - O(1)
var hasCycle = function (head) {

    if(!head) {
        return false;
    }

    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) {
            return true;
        }
    }

    return false;
};

module.exports = hasCycle;