class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start =0;
        let max = 0;
        let set = new Set();
        for(let end =0; end <s.length;end++){
          let  char = s[end];
                while(set.has(char)){   
                set.delete(s[start]);
                start++;
                }
                set.add(char);
                max = Math.max(max, end-start+1);
        }
        return max;
    }
}
