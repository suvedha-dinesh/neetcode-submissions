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
            let min = Infinity;
            for(let coin of coins){
                if(amount-coin>=0){
                   min = Math.min(min, 1+dfs(amount-coin));
                }
            }
            memo.set(amount, min)
            return min;
        }
        let c = dfs(amount);
        return c === Infinity ? -1 : c;

    }
}
