class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num);
        if(this.minHeap.size() && this.maxHeap.front() > this.minHeap.front()){
            this.minHeap.enqueue(this.maxHeap.dequeue())
        }
         if(this.maxHeap.size() - this.minHeap.size() > 1){
            this.minHeap.enqueue(this.maxHeap.dequeue())
        } else if(this.minHeap.size() - this.maxHeap.size() > 1){
            this.maxHeap.enqueue(this.minHeap.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let s1 = this.maxHeap.size();
        let s2 = this.minHeap.size();
        if(s1 === s2){
            return (this.maxHeap.front() + this.minHeap.front()) /2
        } else if(s1 > s2){
           return this.maxHeap.front();
        } else {
            return this.minHeap.front();
        }
    }
}
