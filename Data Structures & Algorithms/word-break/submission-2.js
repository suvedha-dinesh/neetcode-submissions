class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let memo = new Map();
        function dfs(i) {
            if (i === s.length) return true;
            if (memo.has(i)) return memo.get(i);
            for (let word of wordDict) {
                if (s.startsWith(word, i)) {
                    if (dfs(i + word.length)) {
                        memo.set(i, true);
                        return true;
                    }
                }
            }
            memo.set(i, false);
            return false;
        }
        return dfs(0);
    }
}
