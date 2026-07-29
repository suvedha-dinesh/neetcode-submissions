class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adj= new Map();

        for(let word of words){
            for(let char of word){
                if(!adj.has(char)) adj.set(char, []);
            }
            /* 
            adj = {
    w: [],
    r: [],
    t: [],
    f: [],
    e: []
}
            */
        }

        for(let i=0; i<words.length -1; i++){
            let w1 = words[i];
            let w2 = words[i+1];
            let len = Math.min(w1.length, w2.length);
            if(w1.length > w2.length && w1.startsWith(w2)) return '';
            for(let j=0; j<len;j++){
                if(w1[j] !== w2[j]){
                    /*
                    adj = {
    w: ['e'],
    e: ['r'],
    r: ['t'],
    t: ['f'],
    f: []
}
                     */
                    adj.get(w1[j]).push(w2[j]);
                    break;
                }
            }
        }
        let visiting = new Set();
        let visited = new Set();
        let result= [];
        function dfs(ch){
            if(visiting.has(ch)) return false;//found the cycle check notes for example
            if(visited.has(ch)) return true; //already processed
            visiting.add(ch);
            for(let j of adj.get(ch)){
                if(!dfs(j)) return false; //false means "a cycle exists in the directed graph."
            }
            // After all neighbours are explored:
// 1. Remove the node from the current DFS path (visiting)
// 2. Mark it as completely processed (visited)
// 3. Add it to the result (postorder)
// The final result is reversed to get the correct topological order.
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
