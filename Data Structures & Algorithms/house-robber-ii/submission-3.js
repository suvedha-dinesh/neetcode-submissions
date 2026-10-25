class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 0) return 0;
        if(nums.length === 1) return nums[0];
        let dp = new Array(nums.length).fill(-1);
        let nums1 = nums.slice(0, nums.length-1);
        let nums2 = nums.slice(1);
        function dfs(i, nums){
            if(i >= nums.length) return 0;
            if(dp[i] !== -1) return dp[i];
            let rob1 = dfs(i+1, nums);
            let rob2 = nums[i] + dfs(i+2, nums);
            dp[i] = Math.max(rob1, rob2);
            return dp[i];
        }
        let r1 = dfs(0, nums1);
        dp.fill(-1);
        let r2 = dfs(0, nums2);
        return Math.max(r1, r2);
    }
}
