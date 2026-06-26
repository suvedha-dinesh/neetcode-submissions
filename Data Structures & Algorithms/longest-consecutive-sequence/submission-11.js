class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max  = 0;
        for(let num of nums){
            if(set.has(num-1)){
                continue; // which means its not a start of the series
            }
            let length =1;
            while(set.has(num+1)){
                length++;
                num++;
            }
            max = Math.max(max, length)
        }
        return max;
    }
}
