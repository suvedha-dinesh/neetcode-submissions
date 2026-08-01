class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
         let maxHeap = new MaxPriorityQueue();

         for(let stone of stones){
            maxHeap.enqueue(stone);
         }

         while(maxHeap.size() > 1){
            let stone1 = maxHeap.dequeue();
            let stone2= maxHeap.dequeue();
            let weight = stone1 - stone2;
            maxHeap.enqueue(weight)
         }
         return maxHeap.size() === 0 ? 0 : maxHeap.front();
    }
}
