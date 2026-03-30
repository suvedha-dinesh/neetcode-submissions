class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left= [];
        let right= [];
        for(let i=1;i<nums.length;i++){
            left[0] = 1;
            left[i] = left[i-1] * nums[i-1]
        }
        for(let i=nums.length -2; i>=0;i--){
            right[nums.length-1] = 1;
            right[i] = right[i+1] * nums[i+1]
        }
        for(let i=0;i<nums.length;i++){
            nums[i] = left[i] * right[i]
        }
        return nums;
    }
}
