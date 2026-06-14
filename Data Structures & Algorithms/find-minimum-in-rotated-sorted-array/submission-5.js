class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // 1
    //[3,4,5,6,1,2]
    //       s me

    findMin(nums) {
        let start =0;
        let end = nums.length -1;
        while(start < end){
            let mid = Math.floor((start+ end)/2);
            if(nums[mid] > nums[end]){
                start = mid +1;
            } else end = mid;
        }
        return nums[end];
    }
}
