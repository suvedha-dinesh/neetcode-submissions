class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let m = grid.length;
        let n= grid[0].length;
        let queue=[];
        let head =0;

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++){
                if(grid[r][c] === 0){
                    queue.push([r, c])
                }
            }
        }

         // Step 2: BFS from all treasures
        let directions = [
            [1, 0],   // Down
            [-1, 0],  // Up
            [0, -1],  // Left
            [0, 1]    // Right
        ];

        //head tracks which queue element BFS should process next.
         while(head < queue.length){
            let [r, c] = queue[head++];

            for(let [dx, dy] of directions){
                let rx = dx+r;
                let ry = dy+c;

                if(rx <0 || ry <0 || rx >=m || ry>=n || grid[rx][ry] === -1) continue;
            
            // 2147483647 maens Empty so if grid has empty neighbour cslculte its distnace
            if(grid[rx][ry] === 2147483647){
                grid[rx][ry] = grid[r][c]+1; // adding distnace to it neighbor whoch is grid[rx][ry] and then push it to queue to explore its neighbors.
                queue.push([rx, ry]);
            }
            }
        }
        return grid;
    }
}
