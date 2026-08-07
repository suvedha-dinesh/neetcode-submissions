class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.capacity =k;
        this.list = new DDL();
        
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {

        if(this.isFull()){
            return false;
        } else {
            this.list.insertAtLast(value)
            return true;
        }
       
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.isEmpty()){
            return false;
        } else {
            this.list.removeAtFront()
            return true;
        }
    }

    /**
     * @return {number}
     */
    Front() {
        return this.list.getFront();
    }

    /**
     * @return {number}
     */
    Rear() {
       return this.list.getRear();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.list.size === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.list.size === this.capacity;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

class Node{
    constructor(val){
        // this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DDL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getFront(){
        return this.isEmpty() ? -1 : this.head.val;
    }

    getRear(){
        return this.isEmpty() ? -1 : this.tail.val;
    }

    removeAtFront(){
        const node = this.head;
        if(this.size === 0) return false;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } else {
            // 1 -> 2 -> 3
            this.head = node.next;
            this.head.prev = null;
        }
        this.size--;
        return node;
    }

    insertAtLast(val){
        const node = new Node(val);
        if(this.size === 0){
            this.head = node;
            this.tail = node;
        } else {
          this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;         
        }
        this.size++;
        return node;       
    }

}


