class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    // {};
    // {(A, 3), (B,3)}
    leastInterval(tasks, n) {
        let map = new Map();
        let queue=[];
        let ans =0;
        for(let task of tasks){
            map.set(task, (map.get(task)|| 0) + 1)
        }
        let heap = new MaxPriorityQueue(x => x[1]);
        for(let items of map){
            heap.enqueue([items[0], items[1]]);
        }
        while(!heap.isEmpty()){
            let taskCount =0;
        for(let i=0; i<n+1; i++){
            if(!heap.isEmpty()){
            let [task, freq] = heap.dequeue();
            freq--;
            queue.push([task, freq])
            taskCount++;
            }
        }

         while(queue.length > 0){
            let [task, freq] = queue.pop();
            if(freq > 0){
                 heap.enqueue([task, freq]);
            }
         }
        if(!heap.isEmpty()){
            ans += n + 1;
        } else ans += taskCount;
    }
    return ans;
}
}
