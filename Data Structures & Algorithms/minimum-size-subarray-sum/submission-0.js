class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let currSum = 0;
        let left = 0;
        let length = Infinity;
        for (let right = 0; right < nums.length; right++) {
            currSum += nums[right];
            while (currSum >= target) {
                if (right - left + 1 < length) {
                    length = right - left + 1;
                }
                currSum -= nums[left];
                left++;
            }
        }
       return length === Infinity ? 0 : length;
    }
}
