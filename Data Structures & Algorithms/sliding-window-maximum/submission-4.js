class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0;
        let right = 0;
        let queue = [];
        let result = [];
        while (right < nums.length) {
            while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[right]) {
                queue.pop();
            }
            queue.push(right);

            while (queue.length > 0 && left > queue[0]) {
                queue.shift();
            }

            if (right - left + 1 >= k) {
                result.push(nums[queue[0]]);
                left++;
            }
            right++;
        }
        return result;
    }
}
