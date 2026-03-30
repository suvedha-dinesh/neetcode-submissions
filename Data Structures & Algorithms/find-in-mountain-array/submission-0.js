/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */
// 1 2 3 4 5 3 2 1
//
class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {

        //peak
        let start =0;
        let end = mountainArr.length()-1;
        let peak = -1;

        while(start <= end){
            let m = Math.floor((start + end)/ 2);
            if(mountainArr.get(m-1) < mountainArr.get(m) && mountainArr.get(m) < mountainArr.get(m+1)){
                start = m + 1;
            } else if (mountainArr.get(m-1) > mountainArr.get(m) && mountainArr.get(m) > mountainArr.get(m+1)){
                end = m -1;
            } else {
                peak = m;
                break;
            }
        }
        //left
        let left =0;
        let right = peak - 1;
        while(left <= right){
            let m = Math.floor((left + right)/ 2);
            let val = mountainArr.get(m);
            if(val === target){
                return m;
            } else if( val < target){
                left = m + 1;
            } else right = m - 1
        }

          left =peak;
         right = mountainArr.length() - 1;
        while(left <= right){
            let m = Math.floor((left + right)/ 2);
            let val = mountainArr.get(m);
            if(val === target){
                return m;
            } else if( val > target){
                left = m + 1;
            } else right = m - 1
        }

        return -1;


    }
}
