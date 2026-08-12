class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = 0;
        let max = -Infinity;
        for(let num of nums){
            if(currSum < 0) currSum = 0;
                currSum += num;
                max = Math.max(max, currSum)
        }
        return max;
    }
}
