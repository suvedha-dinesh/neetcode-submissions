class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        let freq={}
        for(let i=0; i< order.length; i++){
            freq[order[i]] = i; // { h : 0, l : 1 }
        }
        for(let i=0; i< words.length-1; i++){
            let word1 = words[i];
            let word2 = words[i+1];

            for(let j=0; j<Math.min(word1.length, word2.length); j++){
                if(freq[word1[j]] < freq[word2[j]]){
                    break;
                } else if(freq[word1[j]] > freq[word2[j]]){
                    return false;
                } else continue;
            }

            if(word1.startsWith(word2) && word1.length > word2.length) return false;
        }
        return true;
    }

}
