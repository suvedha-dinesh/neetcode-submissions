class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a-b);
    let result=[[]];
    const dfs = (index, subset) => {
        for(let i=index; i<nums.length; i++){
            if(i !== index && nums[i] === nums[i-1]) continue;
        subset.push(nums[i]);
        result.push([...subset]);
        dfs(i+1, subset);
        subset.pop();
    }
    }
    dfs(0, []);
    return result;
    }
}
