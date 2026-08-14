class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let queue =[];
        let left =0;
        let right =0;
        let result= [];
        while(right < nums.length){
            // pop first to ensure we are pushing the elemnt in right order wich is monotonically decreasing

            while(queue.length > 0 && nums[queue[queue.length-1]] < nums[right]){
                queue.pop();
            }

            queue.push(right);


    // [ 1 5 4 3]
    // [ 1[5]] k=2 value - 5 index -1

    //The queue does NOT need to have length k to push the result.

            while(queue.length && left > queue[0]){
                queue.shift();
            }
// only the window needs o be of length k 
            if(right-left+1 === k){
                result.push(nums[queue[0]]);
                left++;
            }
            right++;
        }
        return result;
    }
}
