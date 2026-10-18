// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }


class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     * // A -> B -> C
     * //  A' -|
     * 
     */
    copyRandomList(head) {
    let current = head;
    while(current){
        let newNode = new Node(current.val);
        newNode.next = current.next;
        current.next = newNode;
        current = current.next.next;
    }

    current = head;
    while(current){
        // A.next // A.next.random - A'.random = A random
       if(current.random) current.next.random = current.random.next;
       current = current.next.next;
    }
    current = head
    let copyHead = new Node();
    let copy = copyHead; //copy is a pointer
    while(current){
        let clone = current.next; // clone = A'
        copy.next = clone; //copy -> A' 
        copy = clone; //  Now A' is copy
        current.next = clone.next; // A.next = A'.next = B;
        current = current.next; //A -> B
    }
    return copyHead.next;
    }
}
