/**
 * @author maneeshavenigalla
 * Given the head of a linked list, return the list after sorting it in ascending order.
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Time complexity - O(n * log N)
// Space complexity - O(1)
var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let middle = slow.next;
    slow.next = null;

    const merge = (list1, list2) => {
        let currentA = list1;
        let currentB = list2;
        let resultNode = new ListNode(-1);
        let current = resultNode;

        while (currentA && currentB) {
            if (currentA.val >= currentB.val) {
                current.next = new ListNode(currentB.val);
                currentB = currentB.next;
            } else {
                current.next = new ListNode(currentA.val);
                currentA = currentA.next;
            }

            current = current.next;
        }

        if (currentA) {
            current.next = currentA;
        }

        if (currentB) {
            current.next = currentB;
        }

        return resultNode.next;
    }

    return merge(sortList(head), sortList(middle));
};

module.exports = sortList;