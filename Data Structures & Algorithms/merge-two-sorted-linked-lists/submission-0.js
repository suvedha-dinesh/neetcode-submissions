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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    //dummy -> 1 -> 1 -> 2 -> 3 -> 4 -> 5
    mergeTwoLists(l1, l2) {
        const dummy = new ListNode();
        let curr = dummy;
        while(l1 && l2){
            if(l1.val <l2.val){
                curr.next = l1
                l1 = l1.next;
                curr = curr.next;
            } else {
                curr.next = l2
                l2 = l2.next;
                curr = curr.next;
            }
        }
        if(l1) {
            curr.next = l1
        }
        if(l2){
            curr.next = l2
        }
        return dummy.next;
    }
}
