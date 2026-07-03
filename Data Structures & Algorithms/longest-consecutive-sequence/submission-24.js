class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0;
        nums.sort((a, b) => a -b);
// 1 2
// 0 1
        let count = 1;
        let max  =1;
        for(let i=0; i< nums.length; i++){
            if(nums[i] === nums[i+1]){
                continue;
            } else if(nums[i] === nums[i+1]-1){
                count++;
                max= Math.max(max, count)
            } else {
                count =1;
            }
        
        }
        return max;
    }
}
