class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        let result=[];
        let subset=[];
        const dfs = (index) => {
            result.push([...subset]);
            for(let i= index; i<nums.length; i++){
                if( i !== index && nums[i] === nums[i-1]) continue;
                subset.push(nums[i]);
                dfs(i+1);
                subset.pop();
            }
        }
        dfs(0);
        return result;
    }
}
