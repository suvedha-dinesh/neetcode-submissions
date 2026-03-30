class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    //5#hello5#world
    encode(strs) {
        let result ='';
        for(let str of strs){
            result += `${str.length}#${str}`
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //5#hello5#world
    decode(str) {
        let i=0;
        let result =[];
        while( i < str.length){
            let pos =str.indexOf('#', i); // 1
            let length = parseInt(str.slice(i, pos)); // 5
             i = pos+1;
            let string = str.slice(i, i+length);
            result.push(string);
            i+= length;
        }
        return result;
    }
}
