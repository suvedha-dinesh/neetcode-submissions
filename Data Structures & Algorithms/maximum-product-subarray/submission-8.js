class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = -Infinity;
        for(let i=0; i< nums.length; i++){
            let prod =1;
            for(let j=i; j<nums.length; j++){
                prod *= nums[j];
                max = Math.max(prod, max)
            }
        }
        return max;
    }
}
