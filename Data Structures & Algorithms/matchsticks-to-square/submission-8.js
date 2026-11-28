class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const total = matchsticks.reduce((acc, curr) => acc+curr, 0);
        matchsticks.sort((a, b) => b-a); // [102,1,1,1,1,1];
        let sideLen = total/4;
        let sides = new Array(4).fill(0);
        if(total % 4 !== 0) return false;
        if(matchsticks[0] > sideLen) return false;
        function dfs(i){
            if(i === matchsticks.length) return true;

            for(let side=0; side<4; side++){
                if(sides[side] + matchsticks[i] <= sideLen){
                    sides[side] += matchsticks[i];
                    if(dfs(i+1)) return true;
                    sides[side] -= matchsticks[i];
                }
            }
            return false;
        }

       return dfs(0);
    }
}
