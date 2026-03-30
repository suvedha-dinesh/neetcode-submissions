class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        matchsticks.sort((a, b) => b-a)
        let total = matchsticks.reduce((acc, currVal) => acc +currVal);
        let length = total /4;
        if(total % 4 !== 0) return false;
        let sides = Array.from({length: 4}, () => 0)
        function dfs(i){
            if(i === matchsticks.length) {
                return true;
            }
            for(let j=0; j<4 ;j++){
                if(sides[j] + matchsticks[i] > length) continue; 
                sides[j] += matchsticks[i];
                if(dfs(i+1)) return true;
                sides[j] -= matchsticks[i];
            }
            return false;
        }
        return dfs(0);
    }
}
