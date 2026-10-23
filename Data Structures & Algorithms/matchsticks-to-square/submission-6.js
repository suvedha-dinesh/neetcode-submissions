class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        matchsticks.sort((a, b) => b - a);
        let totalLen = matchsticks.reduce((a, b) => a + b, 0);
        let sideLen = totalLen/4;
        let sides = new Array(4).fill(0);
        if(totalLen % 4 !== 0) return false;
        if(matchsticks[0] > sideLen) return false;
        function backtracking(index){
            if(index === matchsticks.length) return true;
            for(let side =0; side < 4; side++){
                if(sides[side] + matchsticks[index] <= sideLen){
                    sides[side] += matchsticks[index];
                    if(backtracking(index+1)) return true;
                    sides[side] -= matchsticks[index];
                }
            }
            return false;
        }
        return backtracking(0);
    }
}
