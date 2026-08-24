class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        let freq = new Map();
        for(let i=0; i<order.length; i++){
            freq.set(order[i], i);
        }

        for(let i=0; i<words.length-1; i++){
            let w1 = words[i];
            let w2 = words[i+1];

             if(w1.startsWith(w2) && w1.length > w2.length) return false;
            let len = Math.min(w1.length, w2.length);
             for(let j=0; j<len; j++){
               if(freq.get(w1[j]) < freq.get(w2[j])){
                    break;
               } else if(freq.get(w1[j]) > freq.get(w2[j])){
                    return false;
               } else continue;
               
             }
        
        }
        return true;
    }
}
