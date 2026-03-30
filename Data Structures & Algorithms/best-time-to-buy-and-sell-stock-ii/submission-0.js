class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let currentMin = Infinity;
        for(let i=0; i<prices.length;i++){
            if(prices[i] > currentMin){
                maxProfit += (prices[i] - currentMin)
            }  
            currentMin =  prices[i]
        }
        return maxProfit;
    }
}
