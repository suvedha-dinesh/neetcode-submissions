class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let char of tokens){
            if(char === '+'){
                let a  = stack.pop();
                let b = stack.pop();
                stack.push(a+b);
            } else if(char === '-'){
                
                let a  = stack.pop();
                let b = stack.pop();
                stack.push(b - a);
            } else if(char === '*'){
                
                let a  = stack.pop();
                let b = stack.pop();
                stack.push(a*b);
            } else if(char === '/'){
                
                let a  = stack.pop();
                let b = stack.pop();
                stack.push(Math.trunc(b/a));
            } else {
                stack.push(parseInt(char))
            }
        }
        return stack.join('');
    }
}
