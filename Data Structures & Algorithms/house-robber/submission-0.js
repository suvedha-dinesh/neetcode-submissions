class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
                if(nums.length === 0) return 0;
        let dp = new Array(nums.length).fill(-1);
        function dfs(i){
            if(i >= nums.length) return 0;
            if(dp[i] !== -1) return dp[i];
            let rob1 = dfs(i+1);
            let rob2 = nums[i] + dfs(i+2);
            dp[i] = Math.max(rob1, rob2);
            return dp[i];
        }
        return dfs(0)
    }
}
