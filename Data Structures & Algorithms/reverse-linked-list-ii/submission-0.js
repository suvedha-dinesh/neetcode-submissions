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

        for(let i=0; i< left -1; i++){
            prev = prev.next; //0
        }
        let subListHead = prev.next; //1
        let subListTail = subListHead;
        for(let i=0; i< right-left; i++){
            subListTail = subListTail.next; //3
        }
        let nextNode = subListTail.next; // 4
        subListTail.next = null;
        prev.next = reverseList(subListHead);
        
        subListHead.next = nextNode;

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
