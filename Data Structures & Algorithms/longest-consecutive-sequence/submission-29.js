class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a-b);
        if(nums.length === 0) return 0;
        let max =1;
        let count=1;
        for(let i=0; i< nums.length; i++){
            if(nums[i] === nums[i+1]) continue;
            if(nums[i] === nums[i+1]-1){
                count++;
            } else {
                count = 1;
            }
            max = Math.max(max, count);
        }
        return max;
    }
}
