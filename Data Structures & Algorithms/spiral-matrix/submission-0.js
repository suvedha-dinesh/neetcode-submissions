class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    //t    0    0    0
    //l 0  1    2    3 r 2
    //  0  4    5    6   2 top = top+1
    //  0  7    8    9   2
    //     2    2    2   b
    spiralOrder(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;
        let top =0;
        let bottom = m-1;
        let left = 0;
        let right = n-1;
        let result= [];

        while(top <= bottom && left <= right){

            for(let i=left; i<= right; i++){
                result.push(matrix[top][i])
            }
            for(let i=top+1; i<= bottom; i++){
                result.push(matrix[i][right])
            }
            if(top < bottom){
                
            for(let i=right-1; i>=left; i--){
                result.push(matrix[bottom][i])
            }
            }
            if(left< right){
            for(let i=bottom-1; i> top; i--){
                result.push(matrix[i][left])
            }
            }

            top++;
            bottom--;
            left++;
            right--;
            

        }
        return result;




    }
}
