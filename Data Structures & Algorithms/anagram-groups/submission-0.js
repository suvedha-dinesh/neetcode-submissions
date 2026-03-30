class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isValid(str){
        return str.split('').sort().join('')
    };

    groupAnagrams(strs) {
        let obj= {};
        strs.forEach((str) => {
            let sortedWord = this.isValid(str);
            if(obj[sortedWord]){
                obj[sortedWord].push(str)
            } else obj[sortedWord] = [str]
        })
        return Object.values(obj)
    }
}
