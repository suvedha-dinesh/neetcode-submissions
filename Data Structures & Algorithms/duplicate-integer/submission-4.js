class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj={};
        for(let num of nums){
            if(!obj[num]){
                obj[num]=1;
            }  else {
                obj[num]++; 
                if(obj[num]> 1) return true;
            }
        }
        return false;
    }
}
