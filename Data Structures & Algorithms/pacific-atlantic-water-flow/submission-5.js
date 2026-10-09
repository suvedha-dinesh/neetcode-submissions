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
        function dfs(r, c, visited, prevHeight){
            let key = `${r}-${c}`;
            if(r <0 || c <0 || r >=m || c >=n || heights[r][c]  < prevHeight || visited.has(key)) return;
            visited.add(key);
            dfs(r + 1, c, visited, heights[r][c]);
            dfs(r - 1, c, visited, heights[r][c]);
            dfs(r, c + 1, visited, heights[r][c]);
            dfs(r, c - 1, visited, heights[r][c]);
        }

        for(let i=0; i<n;i++){
            dfs(0, i, pac, heights[0][i])
        }
        for(let i=0; i<n;i++){
            dfs(m-1, i, atl, heights[m-1][i])
        }

        for(let j=0; j<m;j++){
            dfs(j, 0, pac, heights[j][0])
        }
         for(let j=0; j<m;j++){
            dfs(j, n-1, atl, heights[j][n-1])
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
