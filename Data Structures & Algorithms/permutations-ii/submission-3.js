class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
           let result = [];
    let subset = [];
    let used = new Set();
    nums.sort((a, b) => a - b);
    function dfs() {
        if(subset.length === nums.length){
            result.push([...subset]);
            return;
        }

        for(let i=0; i< nums.length;i++){
            if(i > 0 && nums[i] === nums[i-1] && !used.has(i-1)) continue;
            if(used.has(i)) continue;
            used.add(i);
            subset.push(nums[i]);
            dfs(i);
            used.delete(i);
            subset.pop();
        }
    }
    dfs();
    return result;
    }
}
