class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       let set = new Set(nums);
    let res= 0;
    for(let num of set){
        
        let curr = num;
        let maxStreak =0;
            while(set.has(curr)){
                curr++;
                maxStreak++;
            }
            res = Math.max(res, maxStreak)
        
    }
    return res;
    }
}
