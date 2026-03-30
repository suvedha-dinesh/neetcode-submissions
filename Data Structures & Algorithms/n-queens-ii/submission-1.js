class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        let count = 0;
        let posDiag = new Set();
        let negDiag = new Set();
        let cols = new Set();

        function backtracking(row){
            if(row === n){
                count++;
                return;
            }

            for(let col = 0;col<n;col++){
                if(cols.has(col) || posDiag.has(row+col) || negDiag.has(row-col)) continue;
                
            cols.add(col);
            posDiag.add(row+col);
            negDiag.add(row-col); 
            backtracking(row+1);
            cols.delete(col);
            posDiag.delete(row+col);
            negDiag.delete(row-col);
            }
        }
        backtracking(0);
        return count;
    }
}
