class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let m = heights.length;
        let n = heights[0].length;
        let result = [];
        let pac = new Set();
        let atl = new Set();
        function dfs(r, c, prevHeight, visited){
            let key = `${r}-${c}`;
            if(r<0 || c<0 || r>=m || c>=n || heights[r][c] < prevHeight || visited.has(key)) return;
            visited.add(key);
            dfs(r+1, c, heights[r][c], visited);
            dfs(r, c+1, heights[r][c], visited);
            dfs(r, c-1, heights[r][c], visited);
            dfs(r-1, c, heights[r][c], visited);
        }

        for(let r=0; r<m; r++){
            dfs(r, 0, heights[r][0], pac);
            dfs(r, n-1, heights[r][n-1], atl);
        }
        for (let c = 0; c < n; c++){
            dfs(0, c, heights[0][c], pac);
            dfs(m-1, c, heights[m-1][c], atl);
        }

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                let key = `${r}-${c}`;
                if (pac.has(key) && atl.has(key)) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}
