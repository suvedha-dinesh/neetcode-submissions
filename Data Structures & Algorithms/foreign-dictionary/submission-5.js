class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adj = new Map();
        for(let word of words){
            for(let w of word){
                if(!adj.has(w)){
                     adj.set(w, [])
                }
            }
        }

        for(let i=0; i< words.length-1; i++){
            let w1 = words[i];
            let w2 = words[i+1];
            if(w1.startsWith(w2) && w1.length > w2.length) return '';
            let len = Math.min(w1.length, w2.length)
            for(let j=0; j<len; j++){
                if(w1[j] !== w2[j]){
                    adj.get(w1[j]).push(w2[j]);
                    break;
                }
            }
        }
        let result=[];
        let visiting = new Set();
        let visited = new Set();
        function dfs(w){
                if(visiting.has(w)) return false;
                if(visited.has(w)) return true;
                visiting.add(w);
                for(let i of adj.get(w)){
                    if(!dfs(i)) return false;
                }
                visiting.delete(w);
                visited.add(w);
                result.push(w);
                return true;
        }


        for(let ch of adj.keys()){
            if(!dfs(ch)) return '';
        }
        return result.reverse().join('');
    }
}
