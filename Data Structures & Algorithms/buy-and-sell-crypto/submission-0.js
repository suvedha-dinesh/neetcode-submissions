class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit  = 0;
        let minBuyPrice = Infinity;
        for(let price of prices){
            if(price < minBuyPrice){
                minBuyPrice = price;
            } else if(price - minBuyPrice > maxProfit){
                maxProfit = price - minBuyPrice;
            }
        }
        return maxProfit;
    }
}
