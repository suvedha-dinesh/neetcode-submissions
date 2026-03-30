class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let start =0;
        let freqCount = {};
        let max = 0;
        let maxFreqCount = 0;
        for(let end =0; end<s.length;end++){
            freqCount[s[end]] = (freqCount[s[end]] || 0 ) + 1;
            
            maxFreqCount = Math.max(maxFreqCount, freqCount[s[end]]) 
            while((end-start+1) - maxFreqCount > k){
                freqCount[s[start]]--;
                    start++;
                
            }
            max = Math.max(max, (end-start+1));
        }
        return max;
    }
}
