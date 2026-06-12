class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //[3,4,5,6,1,2]
    // s   m s e e

    findMin(nums) {
        
        let start =0;
        let end = nums.length -1;
        while(start < end){
            let mid = Math.floor((start+ end)/2)
            if(nums[end] < nums[mid]){
                start++;
            } else end--;
        }
        return nums[end];

    }
}
