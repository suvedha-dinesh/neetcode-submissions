class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        let ROW = matrix.length;
        let COL = matrix[0].length;
        let firstRow = Array.from({length: ROW}).fill(false);
        let firstCol = Array.from({length: COL}).fill(false);

        for(let i=0; i< ROW; i++){
            for(let j=0; j<COL; j++){
                if(matrix[i][j] === 0){
                    firstRow[i] = true;
                    firstCol[j] = true;
                }
            }
        }

        
        for(let i=0; i< ROW; i++){
            for(let j=0; j<COL; j++){
                if(firstRow[i]  || firstCol[j]){
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
