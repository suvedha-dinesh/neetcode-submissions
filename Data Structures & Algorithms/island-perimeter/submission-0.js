class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
               let m = grid.length;
    let n = grid[0].length;
    
    let perimeter = 0;
    function dfs(r, c){
        if(r <0  || c < 0 || r >=m || c >=n || grid[r][c] === 0) {
            return  1;
        }
        if(grid[r][c] === '*') return 0;
        grid[r][c] = '*';
        return ( dfs(r+1, c) + dfs(r-1, c) + dfs(r, c-1) + dfs(r, c+1))
    }

         for(let i=0; i<m;i++){
        for(let j=0; j<n;j++){
            if(grid[i][j] === 1){
                return dfs(i, j);
            }
        }
    }
    }
}
