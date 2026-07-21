class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        function dfs(i){
            if(i === nums.length -1) return true;

            for(let jump=1; jump<= nums[i]; jump++){
                if(dfs(i+jump)) return true;
            }
            return false
        }
        return dfs(0);
    }
}
