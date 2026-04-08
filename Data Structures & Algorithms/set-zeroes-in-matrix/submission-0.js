class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let mark = matrix.map((row) =>[...row]);
        let ROW = matrix.length;
        let COL = matrix[0].length;
        for(let r=0; r<ROW; r++){
            for(let c=0; c<COL; c++){
                if(matrix[r][c] === 0){
                    for(let col = 0; col<COL; col++){
                        mark[r][col] = 0
                    }
                    for(let row = 0; row<ROW; row++){
                        mark[row][c] = 0
                    }
                }
            }
        }

                for(let r=0; r<ROW; r++){
            for(let c=0; c<COL; c++){
                matrix[r][c] = mark[r][c]
            }}
    }
}
