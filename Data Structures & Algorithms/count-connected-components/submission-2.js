class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = new Map();
        for(let i=0; i<n; i++){
            adj.set(i, []);
        }
        for(let [n1, n2] of edges){
            adj.get(n1).push(n2);
            adj.get(n2).push(n1);
        }
        let count  =0;
        let visited = new Set();

        function dfs(i){
            if(visited.has(i)) return;
            visited.add(i);
            for(let j of adj.get(i)){
                dfs(j)
            }
        }

        for(let i=0; i<n;i++){
            if(!visited.has(i)){
                count++;
                dfs(i)
            }
        }
        return count;
    }
}
