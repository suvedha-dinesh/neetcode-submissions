class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = new MinPriorityQueue();
        for(let num of nums){
            minHeap.enqueue(num); // 1 2 3 4 5
            while(minHeap.size() > k){
                minHeap.dequeue();
                break;
            }
        }
        return minHeap.front();
    }
}
