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
        let left =0;
        let bottom = m-1;
        let right = n-1;
        let result= [];

        while(top <= bottom && left <= right){

            for(let c=left; c<=right; c++){
                result.push(matrix[top][c])
            }
            for(let r=top+1; r<= bottom; r++){
                result.push(matrix[r][right])
            }
            
            if(top < bottom){
                for(let c=right-1; c >= left; c--){
                    result.push(matrix[bottom][c])
                }
            }
            if(left<right){
                for(let r=bottom-1; r >top; r--){
                    result.push(matrix[r][left])
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
