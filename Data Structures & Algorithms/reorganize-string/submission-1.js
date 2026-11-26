class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        let hash = {}
        for(let char of s){
            hash[char] = (hash[char] || 0 ) + 1;
        }
        let index = 0;
        let result=[];
        let sorted = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

        for(let i=0; i<s.length; i++){
            let occur = hash[sorted[i]]; //4
            if(occur > (s.length+1)/2) return '';

            for(let j=0; j<occur; j++){
                if(index >=s.length) index=1
                result[index] = sorted[i];
                index+=2;
            }
        }
        return result;
    }
}
