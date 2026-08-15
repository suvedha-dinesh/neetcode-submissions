class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let left =0;
        let right = arr.length -k;

        while(left < right){
            let mid = Math.floor((left+right)/2);
            if(Math.abs(arr[mid] -x) <= Math.abs(arr[mid+k] -x)){
                right = mid
            } else left =mid +1;
        }
        let result= [];
        for(let i=left; i<left+k; i++){
            result.push(arr[i])
        }
        return result;
    }
}
