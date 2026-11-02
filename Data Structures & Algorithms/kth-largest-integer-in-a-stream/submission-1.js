class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    // [ 1 2 7 8]
    constructor(k, nums) {
          this.heap = new MinPriorityQueue();
        this.k = k;
        for(let num of nums){
            this.heap.enqueue(num);
            if(this.heap.size() > this.k){
                this.heap.dequeue();
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
         this.heap.enqueue(val);
        if(this.heap.size() > this.k){
            this.heap.dequeue();
        } 
        return this.heap.front();
    }
}
