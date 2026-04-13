class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let graph = Array.from({length: n}, () => []);
        for(let [u, v] of edges){
            graph[u].push(v);
            graph[v].push(u);
        }

        let visited = new Set();

        function dfs(node){
            if(visited.has(node)) return;
            visited.add(node)
            for(let nei of graph[node]){
                dfs(nei)
            }
        } 

        let res = 0;

        for(let i=0; i<n;i++){
            if(visited.has(i)) continue;
            dfs(i);
            res++;
        }
        return res;
    }
}
