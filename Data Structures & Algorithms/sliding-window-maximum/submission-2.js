class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left =0;
        let right =0;
        let queue =[];
        let output=[];
        while(right < nums.length){
            while(queue.length > 0 && nums[queue[queue.length-1]] < nums[right]){
                queue.pop();
            }
            queue.push(right);
            if(queue[0] < left){
                queue.shift();
            }
            if(right-left+1 >=k ){
                output.push(nums[queue[0]]);
                left++;
            }
            right++;
        }
        return output;
    }
}
