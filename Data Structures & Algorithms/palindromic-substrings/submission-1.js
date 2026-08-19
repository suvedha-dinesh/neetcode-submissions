class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        for(let i=0; i<s.length; i++){
          isExpand(i, i);
          isExpand(i, i+1);
        }

        function isExpand(i, j){
            while( i>=0 && j<s.length && s[i] === s[j]){
                count++;
                i--;
                j++;
            }
        }
        return count;
    }
}
