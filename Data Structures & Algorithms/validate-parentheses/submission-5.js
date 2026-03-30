class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let hash = {
            '(' : ')',
            '[' : ']',
            '{' : '}',
        }
        let stack=[];
        // let stack = [')', ']', '}'];
        for( let char of s){
            if(hash[char]){
                stack.push(hash[char])
            } else if(stack.length > 0 && stack[stack.length -1] === char){
                stack.pop();
            } else return false;
        }
        return stack.length === 0;
    }
}
