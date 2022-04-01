/**
 * @author maneeshavenigalla
 * Given the head of a singly linked list, group all the nodes with odd indices together 
 * followed by the nodes with even indices, and return the reordered list. The first node 
 * is considered odd, and the second node is even, and so on. Note that the relative order
 * inside both the even and odd groups should remain as it was in the input. You must solve
 * the problem in O(1) extra space complexity and O(n) time complexity.
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {

    let odd = head;
    let even = head.next;

    while(odd.next && odd.next.next) {
        let temp = odd.next;
        odd.next = odd.next.next;
        odd = odd.next;
        temp.next = odd.next;
    }

    odd.next = even;
    return head;
};

module.exports = oddEvenList;