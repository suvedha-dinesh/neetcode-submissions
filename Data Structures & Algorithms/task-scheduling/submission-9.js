class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freq = new Map();
            let ans =0;
        let maxHeap = new MaxPriorityQueue(X => X[1])
        for(let task of tasks){
            freq.set(task, (freq.get(task) || 0 )+ 1)
        }
        for(let items of freq){
            let [task, count] = items;
            maxHeap.enqueue([task, count]);
        }
        let queue= [];
        while(!maxHeap.isEmpty()){
            let taskOperations =0;
            for(let i=0; i<n+1;i++){
                if(!maxHeap.isEmpty()){
                     let [task, count] = maxHeap.dequeue();
                count--;
                queue.push([task, count]);
                taskOperations++;
                }
               
            }

            while(queue.length > 0){
                let [task, freq] = queue.pop();
                if(freq >0 ){
                    maxHeap.enqueue([task, freq])
                }
            }

        

            if(!maxHeap.isEmpty()){
                ans += n+1
            } else ans += taskOperations;

        }
        return ans;
    }
}
