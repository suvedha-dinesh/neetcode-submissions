class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adj = new Map();

        for(let word of words){
            for(let char of word){
                if(!adj.has(char)){
                    adj.set(char, [])
                }
            }
        }

        for(let i=0; i< words.length-1; i++){
            let w1= words[i];
            let w2= words[i+1];
            let len = Math.min(w1.length, w2.length);
            if(w1.startsWith(w2) && w1.length > w2.length) return '';
            for(let j=0; j<len; j++){
                if(w1[j] !== w2[j]){
                    adj.get(w1[j]).push(w2[j]);
                    break;
                }
            }
        }


        let visiting = new Set();
        let visited= new Set();
        let result= [];
        function dfs(ch){
            if(visiting.has(ch)) return false;
               if(visited.has(ch)) return true; //already processed
            visiting.add(ch);
            for(let j of adj.get(ch)){
                if(!dfs(j)) return false;
            }
            visiting.delete(ch);
            visited.add(ch);
            result.push(ch);
            return true;
        }

        for(let ch of adj.keys()){
            if(!dfs(ch)) return '';
        }
        return result.reverse().join('')
    }
}
