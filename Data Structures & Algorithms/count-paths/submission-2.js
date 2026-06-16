class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
            let dp = new Array(m).fill(-1).map(() => new Array(n).fill(-1))
        function dfs(i, j){
            if( i>=m || j >= n) return 0;
            if(i === m-1 && j === n-1) return 1;
            if(dp[i][j] !== -1) return dp[i][j];
            dp[i][j] =  dfs(i+1, j) + dfs(i, j+1)
            return dp[i][j]
        }
      return  dfs(0, 0);
    }
}
