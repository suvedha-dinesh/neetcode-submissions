class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let len = nums.length;

        let obj={};
        for(let i=0; i< len; i++){
            obj[nums[i]] = (obj[nums[i]] || 0) + 1;
            if(obj[nums[i]] > len/2){
                return nums[i]
            }
        }
    }
}
