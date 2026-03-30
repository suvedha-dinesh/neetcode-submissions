class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
       let low = 1;
       let high = Math.max(...piles);
       let k;
       while(low <= high){
         let mid = Math.floor((low+high)/2);
            let totalTime = 0;
         for(let p of piles){
                totalTime += Math.ceil(p/mid);
         }

         if(totalTime <= h){
            k = mid;
            high = mid - 1;
         } else {
            low = mid + 1;
         }
       }
       return low;
    }
}
