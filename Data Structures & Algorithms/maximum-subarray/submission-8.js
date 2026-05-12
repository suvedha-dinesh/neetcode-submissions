class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if(nums.length === 1) return nums[0]
        let currSum =0;
        let max = nums[0];
        for(let i=0; i< nums.length;i++){
            if(currSum < 0) currSum =0;
            currSum += nums[i];
            max = Math.max(max, currSum);
        }
        return max;
    }
}
