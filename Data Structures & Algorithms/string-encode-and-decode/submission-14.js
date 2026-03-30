class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result ='';
        for(let str of strs){
            result+= `${str.length}#${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //4#neet4#code

    decode(str) {
        let i=0;
        let result=[];
        while(i<str.length){
            let pos = str.indexOf('#', i); //1
            let length = parseInt(str.slice(i, pos)) // 4
            i = pos+1; //2
            let string = str.slice(i, i+length);
            result.push(string);
            i+=length;
        }
        return result;
    }
}
