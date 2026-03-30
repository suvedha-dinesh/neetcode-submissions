class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.queue = new DoublyLinkedList();
        this.capacity = k;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.isFull()){
            return false;
        } else {
             this.queue.insertAtLast(value);
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
            this.queue.removeAtFront();
            return true;
        }
    }

    /**
     * @return {number}
     */
    Front() {
        return this.queue.getFront();
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.queue.getRear();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.queue.isEmpty();
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.queue.size === this.capacity;
    }
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size =0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getRear() {
        return this.isEmpty() ? -1  : this.tail.val;
    }

     getFront() {
        return this.isEmpty() ? -1  : this.head.val;
    }

    insertAtLast(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail
            this.tail = node;
        }
        this.size++;
    }

    removeAtFront(){
        const node = this.head;
        this.remove(node);
        return node;
    }

    remove(node){
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } else if(this.head === node){
            this.head = node.next;
            this.head.prev = null;
        } else if(this.tail === node){
            this.tail = node.prev;
            thi.tail.next = null;
        } else {
            // A -> B -> C -> D
            //Remove C
            if(node.prev) node.prev.next = node.next;
            if(node.next) node.next.prev=  node.prev;
        }
        this.size--;
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
