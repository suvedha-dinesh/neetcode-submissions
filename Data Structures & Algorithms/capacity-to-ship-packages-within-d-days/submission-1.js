class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let res = Math.max(...weights);
        let max = weights.reduce((acc, curr) => acc+curr, 0);
        for(let i=res; i<=max; i++){
        let capacity =0;
        let requiredDays =1;
        for(let w of weights){
            if(capacity + w > i){
                requiredDays++;
                capacity = w;
            } else {
                capacity +=w;
            }
        }
        if(requiredDays <= days){
            return i;
        }
      }
        return res;
    }
}
