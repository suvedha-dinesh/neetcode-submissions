class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.queue = new Array(k);
        this.capacity =k;
        this.rear = -1;
        this.front = -1;
        this.size =0;

    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.isFull()){
            return false;
        } 
        if(this.isEmpty()) {
            this.front  = 0;
        }
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = value;
    this.size++;

    return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.isEmpty()){
            return false;
        } else {
            this.queue[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.size--;
            if(this.size === 0 ){
                this.front = -1;
                this.rear = -1;
            }
            return true;
        }
    }

    /**
     * @return {number}
     */
    Front() {
        return this.isEmpty() ? -1  : this.queue[this.front];
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.isEmpty() ? -1  : this.queue[this.rear];
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
