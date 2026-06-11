class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = -Infinity;
        let currMin =1;
        let currMax= 1;

        for(let i=0; i< nums.length; i++){
            [currMin, currMax] = [Math.min(nums[i], currMin * nums[i], currMax * nums[i]),  Math.max(nums[i], currMin * nums[i], currMax * nums[i])]


            max = Math.max(max, currMax);
        }
        return max;
    }

}
