class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const obj ={
            '(' : ')',
            '[' : ']',
            '{' : '}',
        };
        let stack = [];

        for(let char of s){
            if(obj[char]){
                console.log(obj[char], 'obj')
                stack.push(obj[char]);
            } else if(stack.length > 0 && stack[stack.length-1] === char){
                stack.pop()
            } else return false;
        }
        return stack.length === 0;
    }
}
