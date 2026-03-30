class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let res  = 0;
        for(let num of nums){
            let maxStreak=1;
            let current = num;
            while(set.has(current+1)){
                maxStreak++;
                current++;
            }
            res = Math.max(res, maxStreak)
        }
        return res;
    }
}
