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
        while(i < str.length){
            let pos = str.indexOf('#', i); // 1
            let len = parseInt(str.slice(i, pos));
            i =pos +1; //2 => slice(2, 7) //hello;
            let string  = str.slice(i, len+i);
            result.push(string);
            i+=len; // 6
        }
        return result;
    }
}
