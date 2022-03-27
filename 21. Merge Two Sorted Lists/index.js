/**
 * @author maneeshavenigalla
 * You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in 
 * a one sorted list. The list should be made by splicing together the nodes of the first two 
 * lists. Return the head of the merged linked list.
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Time complexity - O(N)
// Space complexity - O(1)
var mergeTwoLists = function (list1, list2) {

    let currentA = list1;
    let currentB = list2;
    let resultNode = new ListNode(-1);
    let current = resultNode;

    while(currentA && currentB) {
        if(currentA.val >= currentB.val) {
            current.next = new ListNode(currentB.val);
            currentB = currentB.next;
        } else {
            current.next = new ListNode(currentA.val);
            currentA = currentA.next;   
        }

        current = current.next;
    }

    if(currentA) {
        current.next = currentA;
    }

    if(currentB) {
        current.next = currentB;
    }

    return resultNode.next;
};

module.exports = mergeTwoLists;