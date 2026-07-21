class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array.from({length: m}, () => Array(n).fill(-1));

        function dfs(r, c){
            if(r === m-1 && c === n-1) return 1;
            if(r <0 || c <0 || r>=m || c >= n) return 0;
            if(dp[r][c] !== -1) return dp[r][c];
            dp[r][c] = dfs(r+1, c) + dfs(r, c+1);
             return dp[r][c];
        }

       return dfs(0, 0)
    }
}
