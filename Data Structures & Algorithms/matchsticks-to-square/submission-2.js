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
        let res = false;
        let sides = Array.from({length: 4}, () => 0)
        function dfs(i){
            if(i === matchsticks.length) {
                res= true;
                return;
            }
            for(let j=0; j<4 ;j++){
                if(sides[j] + matchsticks[i] > length) continue; 
                sides[j] += matchsticks[i];
                dfs(i+1);
                sides[j] -= matchsticks[i];
            }
        }
        dfs(0);
        return res;
    }
}
