class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack=[];
        for(let char of s){
            if(char !== ']'){
                stack.push(char)
            } else {
                let subString=[];
                while(stack.length>0 && stack[stack.length-1] !== '['){   
                    //2[a3[b
                    //subString = [b]
                    subString = stack.pop() + subString;
                }
                stack.pop();
                let k=[];
                while(stack.length && !isNaN(stack[stack.length-1])){   
                    //2[a3[b
                    //k =[3]
                    k = stack.pop() + k;
                }
                stack.push(subString.repeat(parseInt(k, 10)))
            }
        }
        return stack.join('')
    }
}
