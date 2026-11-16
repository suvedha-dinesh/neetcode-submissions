class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     * cost[1] = 2

dfs(2) = 3
dfs(3) = 0

dfs(1) = 2 + Math.min(2, 0)
       = 2
     */
    minCostClimbingStairs(cost) {
        const memo = new Map();

        function dfs(i){
            if(i >= cost.length) return 0;
            if(memo.has(i)) return memo.get(i);
            let res = cost[i] + Math.min(dfs(i+1), dfs(i+2));
           memo.set(i, res)
            return res;
        }

        return Math.min(dfs(0), dfs(1));
    }
}
