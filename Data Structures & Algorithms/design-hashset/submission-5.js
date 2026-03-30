class ListNode{
    constructor(key){
        this.key = key;
        this.next = null;
    }
}

class MyHashSet {
    constructor() {
        this.set = Array.from({length: 10000}, () =>new ListNode())
    }
    /**
     * @param {number} key
     * @return {void}
     */

    hash(key){
        return key % this.set.length;
    }

    add(key) {
        let curr = this.set[this.hash(key)];
        while(curr.next){
            if(curr.next.key === key){
                return;
            }
            curr = curr.next;
        }
        curr.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let curr = this.set[this.hash(key)];
        while(curr.next){
            if(curr.next.key === key){
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let curr = this.set[this.hash(key)];
            while(curr.next){
            if(curr.next.key === key){
               return true;
            }
            curr = curr.next;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
