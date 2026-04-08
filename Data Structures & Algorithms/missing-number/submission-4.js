class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //res += i - nums[i];
    // res = 3
    // 
    missingNumber(nums) {
        let xorsum = 0;
        for(let i=0; i<=nums.length; i++){
            xorsum ^= (i ^nums[i]);
        }
        return xorsum;
    }
}
