class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result= [];
        let subset =[];
        let used = new Set();
        function dfs(){
            if(subset.length === nums.length){
                result.push([...subset]);
                return;
            }

            for(let i=0; i<nums.length; i++){
                if(used.has(i)) continue;
                used.add(i);
                subset.push(nums[i]);
                dfs();
                used.delete(i);
                subset.pop();
            }
        }
        dfs();
        return result;
    }
}
