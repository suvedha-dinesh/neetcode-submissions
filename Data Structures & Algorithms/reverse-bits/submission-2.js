class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {

        let ans =0;
        for(let i=0; i<32; i++){
            ans = ans << 1; // make space at right for ans means left shift
            let bit = n & 1;  //This will simply do the last bit no matter how much big the n is let bit = n & 1;
            ans += bit;
            n = n >> 1;
        }
        return ans >>> 0;// “make sure JS treats it like a positive number"
    }
}
