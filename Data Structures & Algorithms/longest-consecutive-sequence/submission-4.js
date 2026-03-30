class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        nums.sort((a, b) => a- b);
        let maxStreak =1;
        let currLength= 1;
        for(let i=1; i<nums.length ;i++){
          if(nums[i] === nums[i-1]){
            continue; 
          } else if(nums[i] === nums[i-1]  + 1){
            currLength++;
          } else {
            maxStreak= Math.max(maxStreak, currLength)
            currLength = 1;
          }
        }
        return Math.max(maxStreak, currLength);
    }
}
