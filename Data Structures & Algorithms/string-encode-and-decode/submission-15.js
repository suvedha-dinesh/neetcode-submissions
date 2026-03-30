class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result ='';
        for(let s of strs){
            result += `${s.length}#${s}`
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //4#neet
    decode(str) {
        let i=0;
        let result=[];
        while( i<str.length){
            let pos = str.indexOf('#', i); //# pos which is 1
            let length = parseInt(str.slice(i, pos)); //4
            i=pos+1; //2
            let string = str.slice(i, i+length); //neet //(2,6)
            result.push(string);
            i+=length
        }
        return result;
    }
}
