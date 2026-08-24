class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
          let adj = new Map();
        for(let word of words){
            for(let ch of word){
                if(!adj.has(ch)) adj.set(ch, []);
            }
        }

        for(let i=0; i<words.length-1; i++){
            let w1 = words[i];
            let w2 = words[i+1];

             if(w1.startsWith(w2) && w1.length > w2.length) return '';
            let len = Math.min(w1.length, w2.length);
             for(let j=0; j<len; j++){
                if(w1[j] !== w2[j]){
                     adj.get(w1[j]).push(w2[j]);
                break;
                }
               
             }
        
    }
        let visited = new Set();
        let visiting = new Set();
        let result=[];

        function dfs(ch){
            if(visiting.has(ch)) return false;
            if(visited.has(ch)) return true;
            visiting.add(ch);
            for(let c of adj.get(ch)){
                if(!dfs(c)) return false;
            }
            visiting.delete(ch);
            visited.add(ch);
            result.push(ch);
            return true;
        }


        for(let ch of adj.keys()){
            if(!dfs(ch)) return '';
        }
        return result.reverse().join('');
    }
}
