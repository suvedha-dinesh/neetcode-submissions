class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let cols = new Set();
        let posDiag = new Set();
        let negDiag = new Set();
        let board = Array.from({length: n}, () => Array(n).fill('.'));
        let result= [];
        function backtracking(row){
            if(row === n){
                result.push(board.map((r) => r.join('')));
                return;
            }
            for(let col =0; col<n;col++){
                 if(cols.has(col) || posDiag.has(row+col) || negDiag.has(row-col)) continue;
            board[row][col] = 'Q';
            cols.add(col);
            posDiag.add(row+col);
            negDiag.add(row-col);
            backtracking(row+1);
            board[row][col] = '.';
            cols.delete(col);
            posDiag.delete(row+col);
            negDiag.delete(row-col);
            }

        }
        backtracking(0);
        return result;
    }
}
