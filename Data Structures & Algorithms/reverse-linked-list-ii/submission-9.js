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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode();
        dummy.next = head;
        let prevStart = dummy;
        
        for(let i=0; i<left-1; i++){
            prevStart = prevStart.next;
        }
        let subListHead = prevStart.next; 
        let subListTail = subListHead;
        for (let i = 0; i < right - left; i++) {
            subListTail = subListTail.next;
        }
        let nextStart = subListTail.next; // 4
        subListTail.next = null;
        let list = reverseList(subListHead);

        prevStart.next = list;
        subListHead.next = nextStart;

        function reverseList(head) {
            let current = head;
            let prev = null;
            while (current) {
                let next = current.next; // 2
                current.next = prev; // 1 -> 2 break this loop null <- 1
                prev = current; // 1-> prev //  null <- 1 where 1 is prev
                current = next; //  now cuurent = 2 // 2-> 3-> 4
                // prev current next
                //  1      2     3
            }
            return prev;
        }

        return dummy.next;
    }
}
