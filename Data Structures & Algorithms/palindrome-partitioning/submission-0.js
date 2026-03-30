class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     * 
     *                        aab
     *                         
     *                   /     |     \
     *                  a     ab     aab
     *                 |       |
     *                 a       b
     *                 |
     *                 b                
     */                

       
    partition(s) {

        function isPalindrome(s, start, end){
            while(start< end){
                if(s[start] === s[end]){
                    start++;
                    end--;
                } else return false;
            }
            return true;
        }
        let result=[];
        let subset =[];
        function dfs(i){
            if( i >= s.length){
                result.push([...subset]);
                return;
            }

            for(let j=i; j<s.length;j++){
                if(isPalindrome(s, i, j)){
                    subset.push(s.slice(i, j+1));
                    dfs(j+1);
                    subset.pop();
                }
            }
        }
        dfs(0);
        return result;
    }
}
