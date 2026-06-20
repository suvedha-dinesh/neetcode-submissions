class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result=[[]];
        function dfs(index, subset){
            for(let i=index; i<nums.length; i++){
                if( i === nums.length) return;
                subset.push(nums[i]);
                result.push([...subset]);
                dfs(i+1, subset);
                subset.pop();
            }
            return result;
        }

        return dfs(0, [])
    }
}
