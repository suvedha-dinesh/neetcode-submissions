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
            for(let j=i+1; j<nums.length;j++){
                if(nums[j] > nums[i]){
                    res = Math.max(res, 1+dfs(j))
                }
            }
            memo.set(i, res);
            return res;
        }
        // from the above for loop i will have for example [9,1,4,2,3,3,7
        //dfs(0) => length 1 (9 itself)
        //dfs(1) => length -> 2 (1,2,3, 7) [best]
        //dfs(2) => length -> 2 (4,7)
        // we have to find the best from this
        //]
        let ans = 1;
       for(let i=0; i<nums.length;i++){
        ans = Math.max(ans, dfs(i));
       }
       return ans;
    }
}
