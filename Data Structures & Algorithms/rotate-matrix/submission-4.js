class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {

        let left=0;
         let top =0;
        let right= matrix.length -1; 
        let bottom = matrix.length -1;
        while(left < right){
            for(let i=0; i<right-left; i++){
                let topLeft = matrix[top][left+i];
                matrix[top][left+i] = matrix[bottom-i][left];
                matrix[bottom-i][left] = matrix[bottom][right-i];
                matrix[bottom][right-i] = matrix[top+i][right];
                matrix[top+i][right] = topLeft;
            }
                left++;
                right--;
                top++;
                bottom--;
        }
    }
}
