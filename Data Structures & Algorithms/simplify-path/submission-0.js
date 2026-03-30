class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let parts = path.split('/');
        let stack= [];
        for(let char of parts){
            if(char === '..'){
                stack.pop();
            } else if(char && char !== '.'){
                stack.push(char)
            }
        }
        return '/'+ stack.join('/');
    }
}
