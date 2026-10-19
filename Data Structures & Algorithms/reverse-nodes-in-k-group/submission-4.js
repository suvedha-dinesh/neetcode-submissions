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
        let count =0;
        let current = head;
        while(current){
            count++;
            current = current.next;
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
            let nextGrpStart = subListTail.next; //4
            const [grpStart, grpEnd] = reverseList(subListHead, subListTail);
            //   [3,1]
            prevGrpStart.next = grpStart;
            grpEnd.next = nextGrpStart;
            prevGrpStart = grpEnd;
            count -=k;
            function reverseList(start, end){
                let current = start;
                let stop = end.next;
                let prev = null;
                while(current !== stop){
                    let next = current.next;
                    current.next = prev;
                    prev = current;
                    current = next;
                }
                return [end, start];
            }        
        }
        return dummy.next;
    }
}
