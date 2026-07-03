class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for(let s of strs){
            result += `${s.length}#${s}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result=[];
        let i=0;
        while(i < str.length) {
            
        let pos = str.indexOf('#', i); //1
        let val = parseInt(str.slice(i, pos)); //5
        i= pos+1;
        let string = str.slice(i, val+i);
        result.push(string);
        i+=val;
        }
        return result;
    }
    
}
