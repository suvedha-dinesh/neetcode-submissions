class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        let ROW = matrix.length;
        let COL = matrix[0].length;
        let firstRowZero = false;
        let firstColZero = false;

        for(let c=0; c< COL; c++){
            if(matrix[0][c] === 0){
                firstRowZero = true;
            }
        }
        for(let r=0; r< ROW; r++){
            if(matrix[r][0] === 0){
                firstColZero = true;
            }
        }
        
        for(let i=1; i< ROW; i++){
            for(let j=1; j<COL; j++){
                if(matrix[i][j] === 0){
                        matrix[i][0] = 0;
                        matrix[0][j] = 0;
                }
            }
        }

            for (let r = 1; r < ROW; r++) {
        for (let c = 1; c < COL; c++) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                matrix[r][c] = 0;
            }
        }
    }

        if(firstRowZero){
            for(let c=0; c< COL; c++){
                matrix[0][c] = 0
            }
        }

        if(firstColZero){
            for(let r=0; r< ROW; r++){
                matrix[r][0] = 0
            }
        }


    }
}
