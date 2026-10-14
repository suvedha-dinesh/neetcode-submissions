class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        //we have 2 choices
        //1 st choice treating n as an extra character 
        //2 nd choice is matching the character in a dict 
        // n eetcodes
        // e etcodes
        //....
        // for 2nd choice neet dfs(8)
        let memo = new Map();
        function dfs(i){
            if(i === s.length) return 0;
            if(memo.has(i)) return memo.get(i);
            //choice 1
            let minLength = 1 + dfs(i+1);
            //choice 2
            for(let word of dictionary){
                if(s.startsWith(word, i)){
                   minLength = Math.min(minLength, dfs(i+word.length));
                }
            }
            memo.set(i, minLength)
            return minLength;
        }
        return dfs(0);
    }
}
