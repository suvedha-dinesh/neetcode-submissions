class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * // nums
     * // 
     */
    firstMissingPositive(nums) {
        let len = nums.length;
          let expected = 1;
        nums.sort((a, b) => a- b);
        for (let i = 0; i < len; i++) {
            if(nums[i] < expected){
                continue;
            } 
             if(nums[i] === expected){
                expected++;
            } else return expected;
        }
        return expected;
    }
}
