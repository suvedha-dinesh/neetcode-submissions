class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let totalSum = nums.reduce((a, b) => a + b, 0);
        let target = totalSum / 2;
        if(totalSum % 2 !== 0) return false;
        let memo = new Map();
        function dfs(i, sum) {
            let key = `${i}-${sum}`;
            if( i=== nums.length && sum === target) return true;
            if( i=== nums.length && sum !== target) return false;
            if(sum > target) return false;
            if (sum === target) return true;
            if(memo.has(key)) return memo.get(key);
            let result = dfs(i+1, sum) || dfs(i+1, nums[i] + sum);
            memo.set(key, result);
            return result;
        }
        return dfs(0, 0);
    }
}
