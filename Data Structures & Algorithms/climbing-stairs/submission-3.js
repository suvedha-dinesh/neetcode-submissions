class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let dp= new Array(n).fill(-1);
       function dfs(i){
        if(i > n) return 0;
        if(i === n) return 1;
        if(dp[i] !== -1) return dp[i];
        dp[i] =  dfs(i+1) + dfs(i+2);
        return dp[i];
       }
       return dfs(0);
    }
}
