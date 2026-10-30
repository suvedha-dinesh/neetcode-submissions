class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max=0;
        let set = new Set(nums);
        if(nums.length === 0) return 0;
        for(let num of nums){
            if(set.has(num-1)) continue; // which means its not part of it so continue
            let length =1;
            while(set.has(num+1)){
                length++;
                num++;
            }
            max = Math.max(max, length);
        }
        
        return max;
    }
}
