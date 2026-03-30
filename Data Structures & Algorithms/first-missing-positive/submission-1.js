class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // [4 4 4 ]
    //  []
    firstMissingPositive(nums) {
        let len = nums.length;
        for(let i=0; i< len;i++){
            if(nums[i] <=0) nums[i] = len + 1;
        }

        for(let i=0; i< nums.length;i++){
            let currSum = Math.abs(nums[i]);
            if(currSum <= len) {
                let idx = currSum -1;
                if(nums[idx] > 0) nums[idx] *= -1;
            }
        }
        for(let i=0; i< nums.length;i++){
            if(nums[i] > 0) return i+1;
        }
        return len + 1;
    }
}
