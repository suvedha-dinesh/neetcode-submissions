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
        let prev = dummy;
        for(let i=0; i<left-1; i++){
            prev = prev.next;
        }

        let subListHead = prev.next;
        let subListTail = subListHead;

        for(let i=0; i<right-left; i++){
            subListTail = subListTail.next; //3
        }
        const nextNode = subListTail.next; //4
        subListTail.next = null; //3.next -> null
    
        prev.next = reverseList(subListHead); // 3 -> 2-> 1 ->

    subListHead.next = nextNode;
        return dummy.next;

    function reverseList(head){
            let current = head;
            let prev = null; 
            while(current){ //null  <-1  <- 2 <- 3 prev 
                let next = current.next; //2
                current.next = prev;
                prev = current;
                current = next;
            }
            return prev;
        }

    }
}
