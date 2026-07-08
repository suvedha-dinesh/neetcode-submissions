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
            if(nums.length === subset.length){
                result.push([...subset])
            }
            for(let i=0; i<nums.length; i++){
                if(used.has(i)) continue;
                used.add(i);
                subset.push(nums[i]);
                dfs()
                used.delete(i)
                subset.pop();
            }
        }
        dfs();
        return result;
    }
}
