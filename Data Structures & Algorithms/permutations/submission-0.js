class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result=[];
        let subset = [];
        let used = Array.from({length: nums.length}, () => false);
        const dfs = () =>{
            if(subset.length === nums.length){
                result.push([...subset]);
            }
            for(let i=0; i<nums.length; i++){ 
            if(used[i]) continue;
            used[i] = true;
            subset.push(nums[i]);
            dfs(i+1);
            subset.pop();
            used[i] = false;
            }
           
        }
        dfs();
        return result;
    }
}
