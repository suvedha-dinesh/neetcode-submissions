class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
          let memo = new Map();

    function dfs(target){
        if(memo.has(target)) return memo.get(target);
        if(target === 0) return 1;
        if(target < 0) return 0;
        let count =0;
        for(let num of nums){
            count += dfs(target - num)
        }
        memo.set(target, count);
        return count;
    }
    return dfs(target);

    }
}
