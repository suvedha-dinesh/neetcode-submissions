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
    //4#NEET
    decode(str) {
        let i=0;
        let result=[];
        while(i < str.length){
            let pos = str.indexOf('#', i); //1;
            let len = parseInt(str.slice(i, pos)); // 4;
            i= pos+1;
            let string = str.slice(i, i+len);
            result.push(string);
            i+=len;
        }
        return result;
    }
}
