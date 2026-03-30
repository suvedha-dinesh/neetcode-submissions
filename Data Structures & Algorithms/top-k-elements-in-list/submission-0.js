class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        for(let num of nums){
            freqMap.set(num, (freqMap.get(num) || 0 ) + 1)
        }
        let bucket= []; 
        for( let [num, freq] of freqMap){
            if(!bucket[freq]) bucket[freq]= [];
             bucket[freq].push(num)
            // [und, 1[1], 2[2], 3[3], 4[], 5[], 6[]]
            console.log("bucket", bucket)
        }
        let result = [];
        for( let i = bucket.length-1; i >=0 && result.length < k; i--){
            if(bucket[i]){
                result.push(...bucket[i])
            }
        }
        return result;
    }
}
