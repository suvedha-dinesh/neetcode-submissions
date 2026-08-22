class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
    let m = matrix.length;
    let n= matrix[0].length;
    let res = matrix.map((row) => [...row]);

        for(let i=0; i<m; i++){
        for(let j=0; j< n; j++){
            if(matrix[i][j] === 0){
                for(let r=0; r<m; r++){
                    res[r][j] = 0;
                }
                for(let c=0; c<n; c++){
                    res[i][c] = 0;
                }
            }
        }
        }


        for(let i=0; i<m; i++){
        for(let j=0; j< n; j++){
                matrix[i][j] = res[i][j];
            }
        
        }
             
    }
}
