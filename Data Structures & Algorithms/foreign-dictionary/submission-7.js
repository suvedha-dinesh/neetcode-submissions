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
        // n : [f]

        for(let i=0; i<words.length-1; i++){
            let w1= words[i];
            let w2= words[i+1];
            if(w1.startsWith(w2) && w1.length > w2.length) return '';
            let len = Math.min(w1.length, w2.length);
            for( let j=0; j<len;j++){
                if(w1[j] !== w2[j]){
                    adj.get(w1[j]).push(w2[j]);
                    break;
                }
            }
        }
            // {a: [b], b: [c], c : []}
            let visiting = new Set(); 
            let visited = new Set(); // visited :{c}
            let result=[];
            function dfs(w){
                if(visiting.has(w)) return false;
                if(visited.has(w)) return true;
                visiting.add(w);
               for(let j of adj.get(w)){
                if(!dfs(j)) return false;
               }
                visiting.delete(w);
                visited.add(w);
                result.push(w);
                return true;
            }
// h : []
            for(let ch of adj.keys()){
                if(!dfs(ch)) return '';
            }
            return result.reverse().join('');
        }
}
