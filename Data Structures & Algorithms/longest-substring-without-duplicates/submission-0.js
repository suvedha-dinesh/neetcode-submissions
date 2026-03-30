class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0;
        let end = 0;
        let maxChar = 0;
        let set = new Set();
        while(start <s.length && end < s.length){
            let char = s.charAt(end);
            if(!set.has(char)){
                set.add(char);
                end++;
                maxChar = Math.max(maxChar, end-start);
            } else {
                set.delete(s.charAt(start));
                start++;
            }
        }
        return maxChar;
    }
}
