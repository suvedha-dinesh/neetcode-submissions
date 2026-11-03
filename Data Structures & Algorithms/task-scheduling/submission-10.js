class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freq = new Array(26).fill(0);
        for (let task of tasks) {
            freq[task.charCodeAt() - 65]++;
        }
        let maxFreq = Math.max(...freq);
        let maxCount = 0; //max count counts the maximum occured freq
        for (let f of freq) {
            if (maxFreq === f) {
                maxCount++;
            }
        }
        let result = (maxFreq - 1) * (n+1) + maxCount;
        return Math.max(tasks.length, result);
    }
}
