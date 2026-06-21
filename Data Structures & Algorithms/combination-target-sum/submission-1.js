class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result= [];
        const dfs = (index, subset, sum) => {
                if(sum === target){
                    result.push([...subset]);
                    return;
                }
                if(sum > target) return;
            for(let i= index; i<nums.length; i++){
                subset.push(nums[i]);
                dfs(i, subset, sum+ nums[i]);
                subset.pop();
            }

        }
        dfs(0, [], 0);
        return result;
    }
}
