class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let m = board.length;
        let n = board[0].length;

        function dfs(r, c, i){
            if(i === word.length) return true;
            if(r >=m || c >=n || r<0 || c <0 || board[r][c] === '*' || board[r][c] !== word[i]) return false;
            let visited = board[r][c];
            board[r][c] = '*'
            const found = dfs(r+1, c, i+1) ||
            dfs(r-1, c, i+1) ||
            dfs(r, c+1, i+1) ||
            dfs(r, c-1, i+1);
            board[r][c] = visited;
            return found;
        }
        for(let r=0; r <m; r++){
            for(let c=0; c<n;c++){
                if(dfs(r, c, 0)) return true;
            }
        }
        return false;
    }
}
