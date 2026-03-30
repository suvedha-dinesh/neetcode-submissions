class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    //
    characterReplacement(s, k) {
        let max =0;
        
        for (let i = 0; i < s.length; i++) {
            let maxFreq=0;
            let freq = {};
                
            for (let j = i; j < s.length; j++) {
                freq[s[j]] = ( freq[s[j]] || 0 ) + 1;
                let windowSize = j-i+1;
                maxFreq = Math.max(maxFreq, freq[s[j]])
                if(windowSize - maxFreq <= k){
                    max= Math.max(max, windowSize)
                }
                
            }
        }
        return max;
    }
}
