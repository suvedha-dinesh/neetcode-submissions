class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     */
    // 1 > 4
    // 4 > 4 false
    // 2 > 4
    // 3 > 4
    // 3 > 4
    // 7 > 4 false
    lengthOfLIS(nums) {
        let memo = new Map();
        function dfs(i){
            let max = 1;
            if(memo.has(i)) return memo.get(i);
            for(let j = i+1; j<nums.length; j++){
                if(nums[j] > nums[i]){
                    max = Math.max(max, 1+dfs(j));
                }
            }
            memo.set(i, max);
            return max;
        }
        let ans = 1;
        for(let i=0; i< nums.length; i++){
            ans = Math.max(ans, dfs(i));
        }
        return ans;
        
    }
}
