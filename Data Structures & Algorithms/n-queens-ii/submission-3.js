class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        let cols= new Set();
    let posDiag = new Set();
    let negDiag = new Set();
    let count = 0;

    function dfs(row) {

        if(row === n){
            count++;
            return;
        }
        for(let col=0; col<n;col++){
            if(cols.has(col) || posDiag.has(row+col) || negDiag.has(row-col)) continue;
            cols.add(col);
            posDiag.add(row+col);
            negDiag.add(row-col);
            dfs(row+1);
            cols.delete(col);
            posDiag.delete(row+col);
            negDiag.delete(row-col);

        }
    }

    dfs(0);
    return count;
    }
}
