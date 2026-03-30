class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        let start =0;
        let end =0;
        let map = new Map();
        let max  = 0;
        while(end < s.length){
            map.set(s[end], (map.get(s[end]) || 0) + 1);
            end++;
            while(map.size > k){
                map.set(s[start], map.get(s[start])-1);
                if(map.get(s[start]) === 0){
                    map.delete(s[start]);
                }
                start++;
            }
            max = Math.max(max, end-start)
        }
        return max;
    }
}
