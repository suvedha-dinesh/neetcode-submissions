class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        let num1 = nums.slice(1);
        let num2 = nums.slice(0, nums.length-1);
        let dp1 = new Array(num1.length).fill(-1);
        let dp2 = new Array(num2.length).fill(-1);

        function dfs(i, nums, dp){
            if( i >= nums.length) return 0;
            if(dp[i] !== -1) return dp[i];
            let rob1 = dfs(i+1, nums, dp);
            let rob2 =  nums[i] + dfs(i+2, nums, dp);
            dp[i] = Math.max(rob1, rob2);
            return dp[i];
        }
       let r1 = dfs(0, num1, dp1);
        let r2 = dfs(0, num2, dp2);
        let max = Math.max(r1, r2);
        return max;
    }
}
