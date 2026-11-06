class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max= 0;
        let result =0;
        let freq ={};
        let left =0;
        for(let right =0; right<s.length; right++){
            freq[s[right]] = ( freq[s[right]] || 0 ) + 1;
            max = Math.max(max, freq[s[right]]);
            // if window is not valid then run while
            while(right-left+1 - max > k){
                freq[s[left]] =  freq[s[left]]-1
                left++;
            }
            result = Math.max(right-left+1, result);
        }
        return result;
    }
}
