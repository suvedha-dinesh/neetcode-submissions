class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let k = 1;
        while(true){
            let hours = 0;
            for(let p of piles){
                hours += Math.ceil(p/k);
            }
            if(hours <= h){
                return k;
            } 
            k++;
        }
    }
}
