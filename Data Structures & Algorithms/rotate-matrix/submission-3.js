class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    // [1 2]
    // [3 4]
    rotate(matrix) {
        let m = matrix.length;
        let rotated = Array.from({length: m}, () =>Array(m).fill(0))
        for(let i=0; i<m; i++){
            for(let j=0; j<m; j++){
               rotated[j][m-1-i] = matrix[i][j]
               // rotated [0][2-1-0] =  matrix[0][0]
               // rotates[0][1] = 1;

            }
        }

        for(let i=0; i<m; i++){
            for(let j=0; j<m; j++){
               matrix[i][j] = rotated[i][j]
            }
        }
    }
}
