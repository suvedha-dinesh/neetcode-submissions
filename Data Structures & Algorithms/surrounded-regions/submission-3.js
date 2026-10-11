class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
    let m = board.length;
    let n = board[0].length;

    function dfs(r, c){
        if(r < 0 || c <0 || r>=m || c >= n || board[r][c] !== 'O') return;
        board[r][c] = 'T'
        dfs(r, c+1);
        dfs(r-1, c);
        dfs(r+1, c);
        dfs(r, c-1);
    }

      for(let r=0;r<m;r++){
        if(board[r][0] === 'O') dfs(r, 0);
        if(board[r][n-1] === 'O') dfs(r, n-1);
      }

      for(let c=0; c<n;c++){
        if(board[0][c] === 'O') dfs(0, c);
        if(board[m-1][c] === 'O') dfs(m-1, c);
      }

    for(let i=0;i<m;i++){
        for(let j=0; j<n;j++){
           if(board[i][j] === 'O') board[i][j]= 'X';
           if(board[i][j] === 'T') board[i][j]= 'O';
        }
    }
    }
}
