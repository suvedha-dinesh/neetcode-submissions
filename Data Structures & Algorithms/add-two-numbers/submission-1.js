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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let sum =0;
        let carry =0;
        let dummy = new ListNode();
        let current = dummy;
        while(l1 || l2 || carry){
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        sum = v1+v2+carry;
        let newValue = sum % 10;
        carry = Math.floor(sum/10);
        let node = new ListNode(newValue);
        current.next = node;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        current = current.next;
        }
       return dummy.next;

    }
}
