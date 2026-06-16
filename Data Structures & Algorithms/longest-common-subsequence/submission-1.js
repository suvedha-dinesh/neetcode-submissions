class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let m = text1.length;
        let n = text2.length;
         let dp = new Array(m).fill().map(() => new Array(n).fill(-1));
        function dfs(i, j){
            if( i>=m || j >= n) return 0;
            if(dp[i][j] !== -1) return dp[i][j]
            if(text1[i] === text2[j]){
                dp[i][j] = 1 + dfs(i+1, j+1)
            } else dp[i][j] = Math.max(dfs(i , j+1), dfs(i+1, j));
            return dp[i][j];
        }   
        return dfs(0,0)
    }
}
