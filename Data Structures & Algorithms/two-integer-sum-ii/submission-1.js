class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let start =0;
        let end = nums.length -1;
        while(start<end){
            if(nums[start]+ nums[end] === target){
                return [start+1, end+1]
            } else if (nums[start] + nums[end] < target){
                start++;
            } else end--;
        }
    }
}
