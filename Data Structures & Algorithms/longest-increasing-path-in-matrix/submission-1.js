class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;
        let memo = new Map();
        function dfs(r, c, prevVal) {
            if (r < 0 || c < 0 || r >= m || c >= n || matrix[r][c] <= prevVal) return 0;
               let key = `${r}-${c}`;

            if (memo.has(key)) return memo.get(key);

            let res = 1;
            res = Math.max(res, 1 + dfs(r + 1, c, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r - 1, c, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r, c + 1, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r, c - 1, matrix[r][c]));
            memo.set(key, res);
            return res;
        }
        let max = 1;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                max = Math.max(max, dfs(i, j, -Infinity));
            }
        }
        return max;
    }
}
