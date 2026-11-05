class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        trips.sort((a, b) => a[1] - b[1]);
        let minHeap = new MinPriorityQueue(x => x[0]);
        let passengers = 0;
        for( let [currPass, start, end] of trips){
            while(!minHeap.isEmpty() && minHeap.front()[0] <= start){
                passengers -= minHeap.dequeue()[1];

            }
            passengers += currPass;
            if(passengers > capacity){
                return false;
            }

            minHeap.enqueue([end, currPass])
        } 
        return true;
    }
}
