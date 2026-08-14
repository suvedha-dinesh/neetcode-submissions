class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let end = weights.reduce((acc, curr) => acc+curr, 0);
        let start = Math.max(...weights);
        let res;
        while(start <= end){
            let k = Math.floor((start+end)/2);
            let currWeight = 0;
            let requiredDays =1;
            for(let w of weights){
                if(currWeight + w > k){
                    requiredDays++;
                    currWeight =0;
                }
                currWeight +=w;
            }
            if(requiredDays <= days){
                res = k;
                end = k-1;
            } else start = k+1;
        }
        return res;
    }
}
