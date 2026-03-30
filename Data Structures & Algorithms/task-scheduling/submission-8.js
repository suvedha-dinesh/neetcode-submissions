class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let taskArr = new Array(1001).fill(0);
    
        for(let task of tasks ){
            taskArr[task.charCodeAt() - 65]++;
        }
        let maxFreq = Math.max(...taskArr);
        let maxCount =0;
        for(let f of taskArr){
            if(f === maxFreq){
                maxCount++;
            }
        }
        let formula = ((maxFreq-1) * (n+1)) + maxCount
        return Math.max(formula, tasks.length);
    }
}
