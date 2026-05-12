class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = -Infinity;
        for(let i=0; i< nums.length; i++){
            let temp =1;
            for(let j=i; j<nums.length; j++){
                    temp *= nums[j]
                max = Math.max(max, temp)
            }
        }
        return max;
    }
}
