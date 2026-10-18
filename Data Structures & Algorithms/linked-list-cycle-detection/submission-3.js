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
     * @return {boolean}
     */
    hasCycle(head) {
        let current = head;
        let visited = new Set();

        while(current){
            if(visited.has(current)) return true;
            visited.add(current);
            current = current.next;
        }
        return false;
    }
}
