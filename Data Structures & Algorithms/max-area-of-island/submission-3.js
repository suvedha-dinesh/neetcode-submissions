class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let m = grid.length; 
        let n = grid[0].length;
        let max = 0;
        let isLands =0;
        function dfs(r, c){
            if( r>=m || c >=n || r< 0 || c<0 || grid[r][c] === 0) return;
            isLands++;
            grid[r][c] =0;
            dfs(r+1, c);
            dfs(r, c-1);
            dfs(r, c+1);
            dfs(r-1, c);
        }

        for(let r=0; r< m;r++){
            for(let c=0; c<n; c++){
                if(grid[r][c] === 1){
                    dfs(r, c);
                    max = Math.max(isLands, max);
                    isLands=0;
                }
            }
        }
        return max;
    }
}
