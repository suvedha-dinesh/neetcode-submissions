class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS =heights.length;
        let COLS = heights[0].length;
        let result=[];
        function dfs(r, c, visit, prevHeight){
            let key =`${r}, ${c}`;

            if( r<0 || r >=ROWS || c < 0 || c>=COLS || visit.has(key) || heights[r][c] > prevHeight) return [false, false];

            visit.add(key);
            let pacific = r === 0 || c === 0;
            let atlantic = r === ROWS - 1 || c === COLS - 1;
            let [p1, a1] = dfs(r + 1, c, visit, heights[r][c]);
            let [p2, a2] = dfs(r - 1, c, visit, heights[r][c]);
            let [p3, a3] = dfs(r, c + 1, visit, heights[r][c]);
            let [p4, a4] = dfs(r, c - 1, visit, heights[r][c]);
            pacific = pacific || p1 || p2 || p3 || p4;
            atlantic = atlantic || a1 || a2 || a3 || a4;
        return [pacific, atlantic];
        }

                for(let r=0; r<ROWS; r++){
            for(let c=0; c<COLS; c++){
                let [p, a] = dfs(r, c, new Set(),heights[r][c]);
                if(p && a) result.push([r,c])
            }
        }
        return result;
    }
}
