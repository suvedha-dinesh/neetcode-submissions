class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let memo = new Map();
        function dfs(i){
            if(i === nums.length -1) return true;
            if(memo.has(i)) return memo.get(i);
            for(let jump=1; jump<= nums[i]; jump++){
                memo.set(i, true)
                if(dfs(i+ jump)) return true;
            }
            memo.set(i, false);
            return false;
        }
        return dfs(0);
    }
}
