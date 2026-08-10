class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let noOfways = [1,2];
        for(let i=2; i<n; i++){
            noOfways[i] = noOfways[i-1] + noOfways[i-2]
        }
        return noOfways[n-1]
    }
}
