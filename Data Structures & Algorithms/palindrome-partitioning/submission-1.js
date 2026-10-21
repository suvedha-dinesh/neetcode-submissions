class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result=[];
        let subset=[];
        function dfs(i){
            if(i === s.length) {
                result.push([...subset]);
                return;
            }
            for(let j=i; j<s.length;j++){
                if(isPalindrome(s, i, j)){
                    subset.push(s.slice(i, j+1))
                    dfs(j+1);
                    subset.pop();
                }
            }
        }

        dfs(0);
        return result;
        function isPalindrome(s, start, end){
            while(start < end){
                if(s[start] !== s[end]) return false;
                start++;
                end--
            }
            return true;
        }
    }
}
