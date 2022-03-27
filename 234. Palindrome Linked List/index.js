/**
 * @author maneeshavenigalla
 * Given the head of a singly linked list, return true if it is a palindrome.
 * @param {ListNode} head
 * @return {boolean}
 */
// Time complexity - O(N)
// Space complexity - O(N)
var isPalindrome = function (head) {

    let palindrome = '';

    let current = head;

    while (current) {
        palindrome += current.val;
        current = current.next;
    }

    for (let i = 0; i < palindrome.length / 2; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - i - 1]) {
            return false;
        }

        return true;
    }
};

// Time complexity - O(N)
// Space complexity - O(1)
var isPalindrome = function (head) {

    if(!head || !head.next) {
        return true;
    }

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let node = slow.next;
    let next = null;

    while (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    slow.next = prev;
    slow = slow.next;

    while(slow) {
        if(head.val != slow.val) {
            return false;
        }
        head = head.next;
        slow = slow.next;
    }

    return true;

};

module.exports = isPalindrome;