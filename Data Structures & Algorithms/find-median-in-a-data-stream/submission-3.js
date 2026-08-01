class MedianFinder {
    constructor() {
        this.lowerHalf = new MaxPriorityQueue();
        this.upperHalf = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.lowerHalf.enqueue(num);
        this.upperHalf.enqueue(this.lowerHalf.dequeue());
        if(this.lowerHalf.size() < this.upperHalf.size()){
            this.lowerHalf.enqueue(this.upperHalf.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.lowerHalf.size() > this.upperHalf.size()){
            return this.lowerHalf.front();
        }
        return ((this.upperHalf.front() + this.lowerHalf.front()) /2)
    }
}
