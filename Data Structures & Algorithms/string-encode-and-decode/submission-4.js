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
        console.log("result", result)
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i=0;
        while(i<str.length){
            const pos = str.indexOf('#', i);
            const length = parseInt(str.slice(i, pos));
            i =pos+1;
            const string = str.slice(i,i+length )
            result.push(string);
            i+=length;
        }
        return result;
    }
}
