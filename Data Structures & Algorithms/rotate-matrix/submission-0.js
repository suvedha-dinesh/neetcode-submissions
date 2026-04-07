class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
          let m = matrix.length;
        let n = matrix[0].length
        let rotated = Array.from({length: m}, () => Array(n).fill(0))
      
        for(let i=0; i< m;i++){
            for(let j=0; j<n; j++){
                rotated[j][n-i-1] = matrix[i][j];
            }
        }

        for(let i=0; i< m;i++){
            for(let j=0; j<n; j++){
                matrix[i][j] = rotated[i][j];
            }
        }
    }
}
