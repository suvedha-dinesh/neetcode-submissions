class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    //zxyzxyz
    //   s
    //   e       //set={}
    lengthOfLongestSubstring(s) {
        let start =0;
        let max = 0;
        let end =0;
        let set = new Set();
        while(start < s.length && end < s.length){
            let char = s[end];
            if(!set.has(char)){
                set.add(char);
                end++;
                max = Math.max(max, end - start);
            } else {
                set.delete(s[start]);
                start++;
            }
        }
        return max;
    }
}
