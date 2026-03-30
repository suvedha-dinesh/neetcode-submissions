class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for(let str of strs){
            result += `${str.length}#${str}`
        }
        return result;
    }
  
    /**
     * @param {string} str
     * @returns {string[]}
     */
    

      decode(str) {
        let result = [];
        let i=0;
        // '4#neet4#code4#love3#you'
        while(i< str.length){
            let pos = str.indexOf('#', i);
            let length = parseInt(str.slice(i, pos));
            i = pos+1;
            let string = str.slice(i, length+i)
            result.push(string);
            i+=length;
        }
        return result;
    }
}
