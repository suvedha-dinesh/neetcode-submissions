/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
    let l1 = head;
    let l2 = reverseList(slow.next);
    slow.next = null;

while(l1 && l2){
    let t1 = l1.next;
    let t2 = l2.next;
    l1.next = l2;
    l2.next = t1;
    l1 = t1;
    l2 = t2
}
function reverseList(head) {
    let prev = null;
    let current = head;
    while(current){
       let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
    }
}

}
