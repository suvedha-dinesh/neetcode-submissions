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

    function dfs(r, c, visited, prevHeight){
        let key= `${r}-${c}`;

        if(r< 0 || c <0 || r>=m || c>=n || heights[r][c] < prevHeight || visited.has(key)) return;
        visited.add(key)
         dfs(r + 1, c, visited, heights[r][c]);
            dfs(r - 1, c, visited, heights[r][c]);
            dfs(r, c + 1, visited, heights[r][c]);
            dfs(r, c - 1, visited, heights[r][c]);
      
    }

      for(let c=0; c<n;c++){
            dfs(0, c, pac, heights[0][c])
        }
        for(let r=0; r<m; r++){
            dfs(r, 0, pac, heights[r][0])
        }
         for(let c=0; c<n;c++){
            dfs(m-1, c, atl, heights[m-1][c])
        }
        for(let r=0; r<m; r++){
            dfs(r, n-1, atl, heights[r][n-1])
        }


            for(let r=0; r<m; r++){
        for(let c=0; c<n;c++){
              let key= `${r}-${c}`;
            if(pac.has(key) && atl.has(key)){
                
                result.push([r, c])
            }
        }
            }
            return result;
    }
}
