class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     * // 0  1
     *    1  done
     *    
     */
    canFinish(numCourses, prerequisites) {
        let adj= new Map();
        for(let i=0; i< numCourses; i++){
            adj.set(i, []);
        }
        for(let [crs, pre] of prerequisites){
            adj.get(crs).push(pre)
        }
        let visited = new Set();
        function dfs(crs){
            if(visited.has(crs)) return false;
            if(adj.get(crs).length === 0) return true;
            visited.add(crs);

            for(let c of adj.get(crs)){
                if(!dfs(c)) return false; 
            }

            visited.delete(crs);
            adj.set(crs, []);
            return true;
        }

        for(let i=0; i<numCourses; i++){
            if(!dfs(i)) return false;
        }
        return true;
    }
}
