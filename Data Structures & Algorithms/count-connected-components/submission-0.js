class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = Array.from({length :n}, () => []);
        // n=5, [[],[],[],[],[]];
        let visited = new Array(n).fill(false);

        for(let [u, v] of edges){
            adj[u].push(v);
            adj[v].push(u); 
            //[[1], [2,0], [1], [4], [3]] 
        }

// visites all neigboring nodes
        function dfs(node){
            for(let nei of adj[node]){
                if(!visited[nei]){
                    visited[nei] = true;
                    dfs(nei);
                }
            }
        }
// runs only twice
    let res=0;
        for(let node =0; node<n; node++){
            if(!visited[node]) {   
            visited[node]= true;
            dfs(node);
            res++;
            }
        }
        return res;
    }
    
}
