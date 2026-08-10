class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
         let memo = new Map();
        function dfs(i){
            if(memo.has(i)) return memo.get(i);
            let res = 1;
            for(let j=i+1; j<nums.length; j++){
                if(nums[j] > nums[i]){
                    res = Math.max(res, 1+dfs(j))
                }
            }
            memo.set(i, res);
            return res;
        }

        let ans =1;
        for(let i=0; i<nums.length; i++){
            ans =Math.max(ans, dfs(i))
        }
        return ans;
    }
}
