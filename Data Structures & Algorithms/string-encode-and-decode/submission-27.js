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
//4#neet4#code
    /**
     * @param {string} str
     * @returns {string[]}
     */
    //4#neet
    //  2    6
    decode(str) {
        let result =[];
        let i=0;
        while(i< str.length){
            let pos = str.indexOf('#', i); //1
            let len = parseInt(str.slice(i, pos));
            i = pos +1;
            let string = str.slice(i, len+i);
            result.push(string);
            i+=len;
        }
        return result;
    }
}
