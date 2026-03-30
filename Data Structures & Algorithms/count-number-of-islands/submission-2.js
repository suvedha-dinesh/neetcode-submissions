class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let isLandsVisited = 0;
        let m = grid.length
        let n = grid[0].length;
        function dfs(r, c){
            if(r <0 || c <0 || r>=m || c >=n || grid[r][c] !== '1') return;
            grid[r][c] = '0';
            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c+1);
            dfs(r, c-1);
        }


        for(let i=0; i<m;i++){
        for(let j=0; j<n;j++){
            if(grid[i][j] === '1'){
                dfs(i, j);
                isLandsVisited++;
            }
        }
        }
       return isLandsVisited;
    }
}
