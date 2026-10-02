class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a-b);
        let result =[];

        function dfs(index, path, sum){
            if(sum === target){
                result.push([...path])
            }
            if(sum > target) return;
            for(let i=index; i<candidates.length; i++){
                if( i !== index && candidates[i] === candidates[i-1]) continue;
                path.push(candidates[i]);
                dfs(i+1, path, sum+candidates[i])
                path.pop();
            }
        }
        dfs(0, [], 0);
        return result;
    }
}
