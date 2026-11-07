class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let result =0;
        let map = new Map();
        let sum =0;
        for(let num of nums){
            sum += num;
            if(sum === k){
                result++;
            }
            if(map.has(sum-k)){
                result += map.get(sum-k);
            }
            map.set(sum, (map.get(sum)||0)+1)
        }
        return result;
    }
}
