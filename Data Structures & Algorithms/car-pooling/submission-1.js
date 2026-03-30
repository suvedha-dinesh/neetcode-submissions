class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        let timeLine = new Array(1001).fill(0);
        
        for(let [passenger, start, end] of trips){
            timeLine[start] += passenger;
            timeLine[end] -= passenger;
        }
        let current =0;
        for(let i=0; i<timeLine.length;i++){
            current += timeLine[i]
            if(current > capacity){
                return false;
            }
        }
        return true;
    }
}
