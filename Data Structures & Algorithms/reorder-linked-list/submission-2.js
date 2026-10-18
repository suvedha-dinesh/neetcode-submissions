/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 * // 2 4 6 | 8 10
 * // find middle
 * // reverse second half
 * // reorder it easily
 * //
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let dummy = new ListNode();
        dummy.next = head;

        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        let l2 = reverseList(slow.next); // 10 -> 8
        slow.next = null;
        let l1 = head;
        // t1 2 4 6
        // t2 10 8


        while(l1 && l2){
            let t1 = l1.next;
            let t2= l2.next;
            l1.next = l2;
            l2.next = t1;
            l1= t1;
            l2 = t2;
        }

        function reverseList(head){
        let current = head;
        let prev = null;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
    return dummy.next;

    }
}
