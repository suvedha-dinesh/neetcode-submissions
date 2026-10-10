class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let queue =[];
        let distance =0;

        let head =0;

        for(let r=0; r<m;r++){
            for(let c=0; c<n;c++){
                if(grid[r][c] === 0){
                    queue.push([r, c]);
                }
            }
        }
        let directions = [
            [-1,0], //top
            [0, -1], //left
            [1, 0],//down
            [0,1] //right
        ]

        while(head < queue.length){
            let [r, c] = queue[head++];
            for(let [dx, dy] of directions){
                let rx = dx + r;
                let ry = dy + c;
            

            if(rx <0 || ry <0 || rx >=m || ry>=n || grid[rx][ry] === -1) continue;
            if(grid[rx][ry] === 2147483647){
                grid[rx][ry] = grid[r][c] + 1;
                queue.push([rx,ry])       
            }
            }
        }
        return grid;
       
    }
}
