class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     * // adjaceny list
     * // a: []
     * // b: []
     *    c: []
     * // [o]
     */
    foreignDictionary(words) {
        let adj = new Map();
        for(let word of words){
            for(let ch of word){
                if(!adj.has(ch)){
                    adj.set(ch, []);
                }
            }
        }
        for(let i=0; i<words.length-1; i++){
        let w1 = words[i]; // z
        let w2 = words[i+1]; //o
        let len = Math.min(w1.length, w2.length);
        if(w1.startsWith(w2) && w1.length > w2.length) return '';
        for(let j=0; j<len; j++){
            if(w1[j] !== w2[j]){
                adj.get(w1[j]).push(w2[j]); // z: [o]; o: []
                break;
            }
        }
        }
        let visiting = new Set(); //represent nodes in current dfs path // if we dont remove it it will treat it as a cycle
        let result=[];
        let visited = new Set();
        // a -> b -> c
        function dfs(ch){
            if(visiting.has(ch)) return false;
            if(visited.has(ch)) return true;
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
        return result.reverse().join('');
    }
}
