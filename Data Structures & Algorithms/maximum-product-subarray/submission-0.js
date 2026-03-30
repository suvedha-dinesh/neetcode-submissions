class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
            let max = -Infinity;
        for(let i=0; i<nums.length;i++){
           let currMul = nums[i];
            max = Math.max(currMul, max)
            for(let j=i+1; j<nums.length;j++){
                 currMul *= nums[j];
                max = Math.max(currMul, max)
            }
        }
        return max;
    }
}
