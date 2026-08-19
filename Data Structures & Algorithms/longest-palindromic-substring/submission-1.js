class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let len = -Infinity;
        let str ='';
        for(let i=0; i<s.length; i++){
            isExpand(i, i);
            isExpand(i, i+1);
        }

        function isExpand(i, j){
            while( i>=0 && j<s.length && s[i] === s[j]){
                if(j-i+1 > len){ // 3 > 1
                        len = j-i+1;
                         str = s.slice(i, j+1)
                    }
                i--;
                j++;
            }
        }
        
        return str;
    }
}
