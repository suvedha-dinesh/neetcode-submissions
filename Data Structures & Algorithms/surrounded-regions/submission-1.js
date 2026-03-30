class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let m = board.length;
        let n = board[0].length;

        function dfs(r, c){
            if(r<0 || c<0 ||r>=m || c >=n || board[r][c] !== 'O') return;
            board[r][c] = 'T';
            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c-1);
            dfs(r, c+1);
        }

        for(let i=0; i<m; i++){
            if(board[i][0] === 'O') dfs(i, 0);
            if(board[i][n-1] === 'O') dfs(i, n-1);
        }
        for(let j=0; j<n; j++){
            if(board[0][j] === 'O') dfs(0, j);
            if(board[m-1][j] === 'O') dfs(m-1, j);
        }

        for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                if(board[i][j] === 'O') board[i][j] ='X';
                if(board[i][j] === 'T') board[i][j] ='O';
            }
            }
    }

}
