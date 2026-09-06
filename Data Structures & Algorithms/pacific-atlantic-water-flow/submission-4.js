class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROW = heights.length;
        let COL = heights[0].length;
        let pac= new Set();
        let atl = new Set();
        let result=[];
        function dfs(r, c, visit, prevHeight){
            let key= `${r}-${c}`;
            if(r <0 || c<0 || r>=ROW || c >=COL || heights[r][c] < prevHeight || visit.has(key) ) return;
            visit.add(key);
            dfs(r-1, c, visit, heights[r][c]);
            dfs(r+1, c, visit, heights[r][c]);
            dfs(r, c-1, visit, heights[r][c]);
            dfs(r, c+1, visit, heights[r][c]);
        }

        for(let c=0; c<COL; c++){
            dfs(0, c, pac, heights[0][c])
            dfs(ROW-1, c, atl, heights[ROW-1][c])
        }
         for(let r=0; r<ROW; r++){
            dfs(r, 0, pac, heights[r][0])
            dfs(r, COL-1, atl, heights[r][COL-1])
        }
        for(let r=0; r<ROW; r++){
        for(let c=0; c<COL; c++){
            let key= `${r}-${c}`;
            if(pac.has(key) && atl.has(key)){
                result.push([r, c])
            }
        }
        }
        return result;
    }
}
