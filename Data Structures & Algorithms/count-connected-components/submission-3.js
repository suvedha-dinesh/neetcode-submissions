class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    //n = 5, edges = [[0,1],[1,2],[3,4]]
    countComponents(n, edges) {
        let adj =new Map();
        for(let i=0; i<n; i++){
            adj.set(i, []) //{0: [], 1 : [],...4 :[]}
        }
        for(let [n1, n2] of edges){
            adj.get(n1).push(n2);
            adj.get(n2).push(n1);
            //0 - [1]
            //1 -> [0, 2]
            //2 -> [1]
            //3 -> [4]
            //4 -> [3]
        }
        let visited = new Set();
        let count =0;

        function dfs(i){
            if(visited.has(i)) return;
            visited.add(i);
            for(let j of adj.get(i)){
                dfs(j)
            }
        }
        
        for(let i=0; i< n; i++){
            if(!visited.has(i)){
                dfs(i);
                count++;
            }
        }
        return count;
    }
}
