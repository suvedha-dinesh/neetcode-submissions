class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        let memo = new Map();
        function dfs(i, j){
            let key =`${i}-${j}`;
            if(j === t.length) return 1;
            if(i === s.length) return 0;
            if(memo.has(key)) return memo.get(key);
            let res= 0;
            if(s[i] === t[j]){
                res = dfs(i+1, j+1) + dfs(i+1, j);
            } else res = dfs(i+1, j);
            memo.set(key, res);
            return res;
        }
        return dfs(0,0);
    }
}
