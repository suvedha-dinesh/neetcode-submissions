class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        let total = nums.reduce((acc, currVal) => acc +currVal);
        let length = total /k;
        if(total % k !== 0) return false;
        let used = Array.from({length: nums.length}, () => false);
        let res = false;
        function dfs(start, currSum, k){
            if(res) return;
            if( k === 1){
                 res = true;
                return;
            }
            if(currSum  === length){
                dfs(0, 0, k-1);
                return;
            }
            for(let i=start; i<nums.length; i++){
                if (currSum + nums[i] > length) continue;
                if(used[i]) continue;
                used[i] = true;
                dfs(i+1, currSum + nums[i] , k);
                used[i] = false;
            }
        }
        dfs(0, 0, k);
        return res;
    }
}
