class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let total = 0;
            const dfs = (i, curr) => {
                total += curr;
                for(let j =i; j<nums.length; j++){
                    dfs(j+1, nums[j] ^ curr)
                }
            }
            dfs(0, 0) 
        return total;
    }
}
