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
     * @param {number} n
     * @return {ListNode}
     *  dummy  1   2  3   4
     *             r            // n = 2 runs twice 1 and 2
     *    l        r           // run this until right.next is not null
     *         l       r
     *              l     r
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode();
        dummy.next = head;
        let right = dummy;
        let left = dummy;

        for(let i=0; i<n;i++){
            right = right.next;
        }
        while(right.next){
            left = left.next;
            right = right.next;
        }
        left.next = left.next.next;
        return dummy.next;
    }
}
