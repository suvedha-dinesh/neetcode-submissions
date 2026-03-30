class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start =0;
        let max = 0;
        let end =0;
        let set = new Set();
        while(start <s.length && end <s.length){
            if(!set.has(s[end])){
                set.add(s[end]);
                end++;
                max = Math.max(max, end-start);
            } else {
                set.delete(s[start]);
                start++;
            }
        }
        return max;
    }
}
