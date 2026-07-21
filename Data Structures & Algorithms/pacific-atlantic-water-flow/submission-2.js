class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
            let m = heights.length;
    let n = heights[0].length;
    let result=[];
    let pac = new Set();
    let atl = new Set();

    function dfs(r, c, visited, prevHeight, ocean){
        let key= `${r}-${c}`;
        if(r <0 || c <0 || r >=m || c >= n || visited.has(key) || heights[r][c] > prevHeight) return;
        visited.add(key);

        if(ocean === 'atlantic' && (r === m-1 || c=== n-1)) {
            return true;
        } 
        if(ocean === 'pacific' && (r === 0 || c=== 0)) {
            return true;
        } 
    if (dfs(r + 1, c, visited, heights[r][c], ocean)) return true;
    if (dfs(r - 1, c, visited, heights[r][c], ocean)) return true;
    if (dfs(r, c + 1, visited, heights[r][c], ocean)) return true;
    if (dfs(r, c - 1, visited, heights[r][c], ocean)) return true;
        return false;
    }
    

    function canPacific(r, c){
        let visited = new Set();
        return dfs(r, c, visited, heights[r][c], 'pacific')
    }
    
    function canAtlantic(r, c){
        let visited = new Set();
        return dfs(r, c, visited, heights[r][c], 'atlantic')
    }
            for(let r=0; r<m; r++){
        for(let c=0; c<n;c++){
                let pacific = canPacific(r, c);
                let atlantic = canAtlantic(r, c);
                if(pacific && atlantic){
                     result.push([r, c])
                }     
           }
            }
            return result;
    }
}
