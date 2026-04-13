class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let graph = Array.from({length: n}, () => []); // [0 =>[]]
        let visited = new Set();
        for(let [u, v] of edges){
            graph[u].push(v);
            graph[v].push(u);
        }

        function dfs(node, prevNode){
            if(visited.has(node)) return false;
            visited.add(node);
            for(let nei of graph[node]){
                if(nei === prevNode) continue; // eg [[0,1], [1,0]]
                if(!dfs(nei, node)) return false;
            }
            return true;
        }

        return dfs(0, -1) && visited.size === n;
    }
}
