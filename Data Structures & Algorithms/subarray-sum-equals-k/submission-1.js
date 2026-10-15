class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = new Map();
        let ans =0;
        let sum =0;
        for(let num of nums){
            sum += num;
            if(sum === k){
                ans++;
            }
            if(map.has(sum-k)){
                ans += map.get(sum-k)
            }
            map.set(sum, (map.get(sum) || 0 )+ 1);
        }
        return ans;
    }
}
