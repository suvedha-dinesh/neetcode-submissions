class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];
        let result = [];

        let digitsWithChar = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };
        function dfs(i, str) {

            if( i=== digits.length){
                result.push(str);
                return;
            }

            for(let c of digitsWithChar[digits[i]]){
                dfs(i+1, str+c)
            }
        }
        dfs(0, "");
        return result;
    }
}
