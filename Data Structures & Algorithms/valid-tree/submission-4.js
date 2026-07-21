class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    // 2  3
    // | /
    // 0 <-> 1 - 4
    validTree(n, edges) {
          let adj = new Map();
        for(let i=0; i<n; i++){
            adj.set(i, [])
        }
        for(let [n1, n2] of edges){
            adj.get(n1).push(n2); 
            adj.get(n2).push(n1);
        }
        let visited = new Set();
        function dfs(i, prev){
            if(visited.has(i)) return false;
            visited.add(i);
            for(let j of adj.get(i)){
                if(j === prev) continue;
                if(!dfs(j, i)) return false;
            }
            return true;
        }

        return dfs(0, -1) && visited.size === n;
    }
}
