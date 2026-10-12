class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let adj= new Map();

        function dfs(node, target, visited){
            if(node === target) return true;
            if(visited.has(node)) return false;

            visited.add(node);
            for(let nei of adj.get(node)||[]){
            if(dfs(nei, target, visited)){
                return true;
            }
        }
        // No path to target was found
         return false;
        }


        for (let [u, v] of edges){
            let visited = new Set();

             // Check BEFORE adding the current edge
            if(dfs(u, v, visited)){
                return [u, v]
            }
            // No existing path, so safely add this edge
            if(!adj.has(u)) adj.set(u, []);
            if(!adj.has(v)) adj.set(v, []);

            adj.get(u).push(v);
            adj.get(v).push(u);
        }
    }
}
