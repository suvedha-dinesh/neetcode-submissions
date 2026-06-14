class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
       let count= 1;
       while(true){
         let totalHours =0;
         for(let p of piles){
            totalHours += Math.ceil(p/count);
         }
         if(totalHours <= h) return count;
         count++;
       }
    }
}
