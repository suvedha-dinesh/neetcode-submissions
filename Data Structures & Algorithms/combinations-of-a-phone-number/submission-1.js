class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];
        let result=[];
        let digitsWithChar = {
            '2': 'abc',
            '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
        };

        function dfs(i, curr){
            if(digits.length === curr.length){
                result.push(curr);
                return;
            }

            for( let char of digitsWithChar[digits[i]]){
                dfs(i+1, curr+char)
            }
        }
        dfs(0, '');
        return result;
    }
}
