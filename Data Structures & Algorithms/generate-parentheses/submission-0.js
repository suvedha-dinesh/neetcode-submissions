class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        let stack = [];
        const dfs = (open, close) => {
            if(open === close && close === n){
                result.push(stack.join(''))
            }
            if(open <n){
                stack.push('(');
                dfs(open+1, close);
                stack.pop();
            }
            if(close < open){
                stack.push(')');
                dfs(open, close+1);
                stack.pop();
            }
        }
        dfs(0,0);
        return result;
    }
}
