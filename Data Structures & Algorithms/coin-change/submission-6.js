class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let memo = new Map();
        function dfs(amount){
            if(amount === 0) return 0;
            if(memo.has(amount)) return memo.get(amount);
            let res = Infinity;
            for(let i=0; i< coins.length; i++){
                if(amount - coins[i] >= 0){
                   res =  Math.min(res, 1 + dfs(amount - coins[i]))
                }
            }
            memo.set(amount, res);
            return res;
        }
        let result = dfs(amount) === Infinity ? -1 : dfs(amount)       
        return result;
    }
}
