class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums.sort((a,b) => a-b);
    let result= [];
    let used = new Array(nums.length).fill(false);
    let subset=[];
    function dfs(){
        if(subset.length === nums.length) {
            result.push([...subset])
        }

        for(let i= 0; i<nums.length; i++){
            if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;
            if(used[i]) continue;
            used[i] = true;
            subset.push(nums[i]);
            dfs();
            subset.pop();
            used[i]= false;
        }
    }
    
        dfs();
        return result;
    }
}
