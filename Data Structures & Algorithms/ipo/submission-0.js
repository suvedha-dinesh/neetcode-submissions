class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {

        let minHeap = new MinPriorityQueue(x => x[0]);
        let maxHeap = new MaxPriorityQueue();

        for(let i=0; i< capital.length; i++){
            minHeap.enqueue([capital[i], profits[i]]);
        }
        for(let i=0; i< k; i++){
            while(!minHeap.isEmpty() && minHeap.front()[0] <= w){
               maxHeap.enqueue(minHeap.dequeue()[1]) 
            }
            w += maxHeap.dequeue();
        }
        return w;
    }
}
