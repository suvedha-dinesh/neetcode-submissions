class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    // start = 10, end = 22, mid = 16
    splitArray(nums, k) {
        let start = Math.max(...nums);
        let end = nums.reduce((acc, curr) => acc + curr);
        let result;
        while(start <= end){
            let mid = Math.floor((start+end)/2);
            if(canSplit(mid)){
                result = mid;
                end = mid - 1;
            } else start = mid + 1;
        }

        function canSplit(largest){
            let subArray = 1;
            let currSum =0;
            for(let n of nums){
                currSum += n;
                if(currSum > largest){
                    subArray += 1;
                    currSum = n;
                }
            }
            return subArray <= k;
        }
        return result;
    }
}
