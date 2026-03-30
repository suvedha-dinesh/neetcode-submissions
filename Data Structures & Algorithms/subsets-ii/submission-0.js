class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a-b);
        let result= [];
    const dfs = (i, subset) =>{
        if(i === nums.length) {
            result.push([...subset]);
            return;
        }
        subset.push(nums[i])
        dfs(i+1, subset);
        while(i+1 < nums.length && nums[i] === nums[i+1]) i++;
        subset.pop();
        dfs(i+1, subset);
    }
    dfs(0, []);
    return result;
    }
}
