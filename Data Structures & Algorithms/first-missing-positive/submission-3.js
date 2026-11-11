class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * // nums
     */
    firstMissingPositive(nums) {
        let len = nums.length;
        for (let i = 0; i < len; i++) {
            if (nums[i] <= 0) nums[i] = len + 1; // [4  4  4]
        }

        for (let i = 0; i < len; i++) {
            const currNum = Math.abs(nums[i]);
                if(currNum <= len){
                let idx = currNum -1
               if(nums[idx] > 0) nums[idx] *= -1;
            }
            
        }

        for (let i = 0; i < len; i++) {
            if(nums[i] > 0) return i+1;
        }

        return len + 1;
    }
}
