class MedianFinder {
    constructor() {
        
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num);
        this.minHeap.enqueue(this.maxHeap.dequeue());
        if(this.maxHeap.size() < this.minHeap.size()){
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.minHeap.size() < this.maxHeap.size()){
            return this.maxHeap.front();
        } else {
            return (this.maxHeap.front() + this.minHeap.front()) /2;
        }
    }
}
