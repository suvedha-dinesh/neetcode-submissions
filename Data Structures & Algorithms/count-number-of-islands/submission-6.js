class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let isLands = 0;
        let m = grid.length;
        let n = grid[0].length;
        function dfs(r, c){
            if( r >=m || c >=n || r<0 || c <0 || grid[r][c] === '0') return;
                grid[r][c] = '0';
                dfs(r+1, c);
                dfs(r, c-1);
                dfs(r-1, c);
                dfs(r, c+1);
        }

        for(let r=0; r<m ;r++){
        for(let c=0; c<n;c++){
            if(grid[r][c] === '1'){
                dfs(r, c);
                isLands++;
            }
        }
        }
        return isLands;
    }
}
