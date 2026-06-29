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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {

        let current = head;
        let count=0;

        while(current){
            current = current.next;
            count++;
        }

        let dummy = new ListNode();
        dummy.next = head;
        let prevGrpStart = dummy;
        while(count >= k){
        let subListHead = prevGrpStart.next;

        let subListTail = subListHead;

        for(let i=0; i<k-1; i++){
            subListTail = subListTail.next;
        }

        const nextGrpStart = subListTail.next; // 4

        const [grpStart, grpEnd] = reverseList(subListHead, subListTail);

        prevGrpStart.next = grpStart;
        grpEnd.next = nextGrpStart;
        prevGrpStart = grpEnd;
        count -= k;

        }

        function reverseList(start, end){
            let current = start;
            let stop = end.next;;
            let prev = null;
            while(current !== stop){
                 let next = current.next; // 2
                 current.next = prev; // 1 -> 2 break this loop null <- 1
                 prev = current; // 1-> prev //  null <- 1 where 1 is prev
                 current = next; 
            }
            return [end, start];   
        }

        return dummy.next;
    }
}
