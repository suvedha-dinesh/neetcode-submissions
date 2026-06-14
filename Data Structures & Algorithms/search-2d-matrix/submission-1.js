class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        function getRow(matrix, target){
            let top = 0;
            let bottom = matrix.length -1;

            while(top <= bottom){
                let mid = Math.floor((top+bottom)/2);
               //    0        matrix[0].length -1;
        // m     0 [[1, 2, 4, 8],
        // m     1  [10,11,12,13],  
        // m     2  [14,20,30,40]]
                if(target < matrix[mid][0]){ // 8 < 11
                    bottom = mid -1;
                } else if(target > matrix[mid][matrix[0].length -1]){
                    top = mid +1;
                } else return mid;
            }
            return -1;
        }

        let left =0;
        let right = matrix[0].length -1;
        let row = getRow(matrix, target);
         if(row === -1) return false;
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(matrix[row][mid] < target){ //matrix[1][1] = 11 < target it wrong 11 < 10
                left = mid +1;
            } else if(matrix[row][mid] > target){ // 11> target /// 11> 10
                right = mid -1;
            } else return true;
        }
        return false;
    }
}
