class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result= [];
        function dfs(index, sum, path){
            if(sum === target){
                result.push([...path]);
                return;
            }
            if(sum > target) return;
            for(let i=index; i<nums.length; i++){
                path.push(nums[i]);
                dfs(i, sum+nums[i], path)
                path.pop();
            }
        }
        dfs(0, 0, [])
        return result;
    }
}
