class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];
        
        for(let char of s){
            if(char !== ']'){
                stack.push(char)
            } else {
                let substring= '';
                while(stack.length >0 && stack[stack.length-1] !== '['){
                    substring = stack.pop() + substring;
                }
                stack.pop();

                let k= '';
                while(stack.length > 0 && !(isNaN(stack[stack.length -1])) ){
                    k = stack.pop() + k;
                }
                stack.push(substring.repeat(parseInt(k, 10)))
            }
        }
        return stack.join('')
    }
}
