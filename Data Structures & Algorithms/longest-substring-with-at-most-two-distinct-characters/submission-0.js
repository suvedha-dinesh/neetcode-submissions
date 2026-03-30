class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        let start =0;
        let end = 0;
        let map = {};
        let distinct =0;
        let max =0;
        while(end < s.length){
            if(!map[s[end]]){
                map[s[end]] = 1;
                distinct++;
            } else {
                map[s[end]]++;
            }
            end++;

             while(distinct > 2 ){
            map[s[start]]--;
           if(map[s[start]] === 0){
            delete map[s[start]];
            distinct--;
           }
           start++
        }
        max = Math.max(max, end-start)
        }
       return max;
    }
}
