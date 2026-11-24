class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        let m = word1.length;
        let n = word2.length;
        let dp = Array.from({ length: m }, () => new Array(n).fill(-1));

        function dfs(i, j) {
            if (m === i) return n - j;
            if (n === j) return m - i;
            if(dp[i][j] !== -1) return dp[i][j];
            if (word1[i] === word2[j]) {
               dp[i][j] = dfs(i+1, j+1)
            } else {
                dp[i][j] = 1 + Math.min(dfs(i+1, j), dfs(i, j+1), dfs(i+1, j+1))
            }
            return dp[i][j];
        }
        return dfs(0, 0);
    }
}
