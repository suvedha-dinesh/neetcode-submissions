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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        //find length for heada nad headB

        let count1=0;
        let count2=0;
        let curr1= headA;
        let curr2= headB;
        while(curr1){
            count1++;
            curr1= curr1.next;
        }
         while(curr2){
            count2++;
            curr2= curr2.next;
        }
        //find the diff between both
        let length = Math.abs(count1- count2);
        let longest = count1< count2 ? headB : headA;
        let smallest = count1< count2 ? headA : headB;
        while(length > 0){
            longest = longest.next;
            length--;
        }
        while(smallest && longest){
            if(smallest === longest){
                return longest;
            }
            longest= longest.next;
            smallest = smallest.next;
        }
        return null;
    }
}
