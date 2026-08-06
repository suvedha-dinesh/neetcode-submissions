class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.capacity =k;
        this.queue = [];
        this.size = 0;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.isFull()){
            return false
        } else {
            
        this.queue.push(value);
        this.size++;
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
        this.queue.shift();
        this.size--;
        return true;
        }
    }

    /**
     * @return {number}
     */
    Front() {
        return this.isEmpty() ? -1 : this.queue[0];
    }

    /**
     * @return {number}
     */
    Rear() {
       return this.isEmpty() ? -1 : this.queue[this.queue.length-1]
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size === this.capacity;
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
