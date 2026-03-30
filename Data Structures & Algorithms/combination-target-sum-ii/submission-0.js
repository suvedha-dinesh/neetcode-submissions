class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums, target) {
        nums.sort((a, b) => a-b);
        let result= [];
        const dfs = (index, path, sum) => {
                if(sum === target){
                    result.push([...path]);
                    return;
                }
                if(sum > target) return;
         for(let i=index; i<nums.length; i++){
            if(i !== index && nums[i] === nums[i-1]) continue;
                path.push(nums[i]);
                dfs(i+1, path, sum+nums[i]);
                path.pop();
            }
        }
        dfs(0, [], 0);
        return result;
    }
}
